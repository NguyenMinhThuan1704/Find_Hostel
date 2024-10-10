import React, { useState } from 'react';
import Address from './Address';
import Information from './Information';
import { BsCameraFill } from 'react-icons/bs';
import { ImBin } from 'react-icons/im';
import { apiUploadImages } from 'services';
import Loading from 'components/Loading';
import Image from 'components/Image';

function CreatePost() {
    const [payload, setPayload] = useState({
        categoryCode: '',
        title: '',
        priceNumber: 0,
        areaNumber: 0,
        images: '',
        address: '',
        priceCode: '',
        areaCode: '',
        description: '',
        target: '',
        province: '',
    });

    const [imagesPreview, setImagesPreview] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFiles = async (e) => {
        e.stopPropagation();
        setIsLoading(true);
        let images = [];
        let files = e.target.files;
        const folder = 'findHostel';

        let formData = new FormData();
        for (let i of files) {
            formData.append('file', i);
            formData.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESETS);
            formData.append('folder', folder);
            let response = await apiUploadImages(formData);
            if (response.status === 200) images = [...images, response.data?.secure_url];
        }
        setIsLoading(false);
        setImagesPreview((prev) => [...prev, ...images]);
        setPayload((prev) => ({ ...prev, images: [...prev.images, ...images] }));
    };
    const handleDeleteImage = (image) => {
        setImagesPreview((prev) => prev?.filter((item) => item !== image));
        setPayload((prev) => ({
            ...prev,
            images: prev.images?.filter((item) => item !== image),
        }));
    };

    console.log(payload);

    return (
        <div className="bg-white p-4">
            <h1 className="my-0 border-b border-b-slate-400">Đăng tin mới</h1>
            <div className="my-6 bg-[#f8d7da] border border-solid border-[#f5c6cb] px-8 py-4">
                Nếu bạn đã từng đăng tin trên Phongtro123.com, hãy sử dụng chức năng ĐẨY TIN / GIA HẠN / NÂNG CẤP VIP
                trong mục QUẢN LÝ TIN ĐĂNG để làm mới, đẩy tin lên cao thay vì đăng tin mới. Tin đăng trùng nhau sẽ
                không được duyệt.
            </div>
            <div className="flex gap-8">
                <div className="flex flex-col gap-8 w-[70%]">
                    <Address setPayload={setPayload} />
                    <Information payload={payload} setPayload={setPayload} />

                    <div className="w-full mb-6">
                        <h2 className="font-semibold text-xl py-4">Hình ảnh</h2>
                        <small>Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn</small>
                        <div className="w-full">
                            <label
                                className="w-full border-2 h-[200px] my-4 gap-4 flex flex-col items-center justify-center border-gray-400 border-dashed rounded-md"
                                htmlFor="file"
                            >
                                {isLoading ? (
                                    <Loading />
                                ) : (
                                    <div className="flex flex-col items-center justify-center">
                                        <BsCameraFill color="blue" size={50} />
                                        Thêm ảnh
                                    </div>
                                )}
                            </label>
                            <input onChange={handleFiles} hidden type="file" id="file" multiple />
                            <div className="w-full">
                                <h3 className="font-medium py-4">Ảnh đã chọn</h3>
                                <div className="flex gap-4 items-center">
                                    {imagesPreview?.map((item) => {
                                        return (
                                            <div
                                                key={item}
                                                className="relative w-1/3 h-1/3 border border-solid rounded-3xl shadow-md"
                                            >
                                                <Image
                                                    src={item}
                                                    alt="preview"
                                                    className="w-full h-full object-none rounded-3xl shadow-md"
                                                />
                                                <span
                                                    title="Xóa"
                                                    onClick={() => handleDeleteImage(item)}
                                                    className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full"
                                                >
                                                    <ImBin />
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[500px]"></div>
                </div>

                <div className="w-[30%]">Map</div>
            </div>
        </div>
    );
}

export default CreatePost;
