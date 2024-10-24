/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Select from './Select';
import { apiGetPublicDistrict, apiGetPublicProvinces, apiGetPublicWard } from 'services';
import { useSelector } from 'react-redux';
function Address({ setPayload }) {
    const { dataEdit } = useSelector((state) => state.post);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [province, setProvince] = useState('');

    const [district, setDistrict] = useState('');
    const [ward, setWard] = useState('');
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if (dataEdit && provinces.length > 0) {
            let addressArr = dataEdit?.address?.split(',');
            if (addressArr && addressArr.length > 0) {
                let foundProvince = provinces?.find((item) => item.name === addressArr[addressArr.length - 1]?.trim());
                setProvince(foundProvince ? foundProvince.id : '');
            }
        }
    }, [provinces, dataEdit]);

    useEffect(() => {
        if (dataEdit && districts.length > 0) {
            let addressArr = dataEdit?.address?.split(',');
            if (addressArr && addressArr.length > 1) {
                let foundDistrict = districts?.find((item) => item.name === addressArr[addressArr.length - 2]?.trim());
                setDistrict(foundDistrict ? foundDistrict.id : '');
            }
        }
    }, [districts, dataEdit]);

    useEffect(() => {
        if (dataEdit && wards.length > 0) {
            let addressArr = dataEdit?.address?.split(',');
            if (addressArr && addressArr.length > 2) {
                let foundWard = wards?.find((item) => item.name === addressArr[addressArr.length - 3]?.trim());
                setWard(foundWard ? foundWard.id : '');
            }
        }
    }, [wards, dataEdit]);

    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) {
                setProvinces(response?.data.data);
            }
        };
        fetchPublicProvince();
    }, []);

    useEffect(() => {
        setDistrict(null);
        setWard(null);
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province);
            if (response.status === 200) {
                setDistricts(response.data?.data);
            }
        };
        province && fetchPublicDistrict();
        !province ? setReset(true) : setReset(false);
        !province && setDistricts([]);
    }, [province]);

    useEffect(() => {
        setWard(null);
        const fetchPublicWard = async () => {
            const response = await apiGetPublicWard(district);
            if (response.status === 200) {
                setWards(response.data?.data);
            }
        };
        district && fetchPublicWard();
        !district ? setReset(true) : setReset(false);
        !district && setWards([]);
    }, [district]);

    useEffect(() => {
        setPayload((prev) => ({
            ...prev,
            address: `${ward ? `${wards?.find((item) => item.id === ward)?.name}, ` : ''}${district ? `${districts?.find((item) => item.id === district)?.name}, ` : ''}${province ? provinces?.find((item) => item.id === province)?.name : ''}`,
            province: `${province ? provinces?.find((item) => item.id === province)?.name : ''}`,
        }));
    }, [province, district, setPayload, districts, provinces, ward, wards]);

    return (
        <div>
            <h2 className="font-semibold text-[22px] mb-6">Địa chỉ cho thuê</h2>
            <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                    <Select
                        type="province"
                        value={province || ''}
                        setValue={setProvince}
                        options={provinces}
                        label="Tỉnh/Thành phố"
                    />
                    <Select
                        reset={reset}
                        type="district"
                        value={district || ''}
                        setValue={setDistrict}
                        options={districts}
                        label="Quận/Huyện"
                    />
                    <Select
                        reset={reset}
                        type="ward"
                        value={ward || ''}
                        setValue={setWard}
                        options={wards}
                        label="Xã/Phường"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div>Địa chỉ chính xác</div>
                    <input
                        type="text"
                        readOnly
                        className="border border-gray-300 bg-gray-200 p-2 rounded-md w-full"
                        value={`${ward ? `${wards?.find((item) => item.id === ward)?.name}, ` : ''}${district ? `${districts?.find((item) => item.id === district)?.name}, ` : ''}${province ? provinces?.find((item) => item.id === province)?.name : ''}`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Address;
