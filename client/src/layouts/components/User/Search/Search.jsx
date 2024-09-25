/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import SearchItem from './SearchItem';
import icons from 'utils/icons';
import Model from '../Model';
import { useSelector } from 'react-redux';
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom';
import config from 'config';

const { BsChevronRight, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, MdOutlineHouseSiding, FiSearch } = icons;

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isShowModal, setIsShowModal] = useState(false);
    const [content, setContent] = useState([]);
    const [name, setName] = useState('');
    const { provinces, areas, prices, categories } = useSelector((state) => state.app);
    const [queries, setQueries] = useState({});
    const [arrMinMax, setArrMinMax] = useState({});
    const [defaultText, setDefaultText] = useState('');
    useEffect(() => {
        if (!location?.pathname.includes(config.routes.search)) {
            setArrMinMax({});
            setQueries({});
        }
    }, [location]);

    const handleShowModal = (content, name, defaultText) => {
        setContent(content);
        setName(name);
        setDefaultText(defaultText);
        setIsShowModal(true);
    };

    const handleSubmit = useCallback(
        (e, query, arrMaxMin) => {
            e.stopPropagation();
            setQueries((prev) => ({ ...prev, ...query }));
            setIsShowModal(false);
            arrMaxMin && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
        },
        [isShowModal, queries],
    );

    const handleSearch = () => {
        const queryCodes = Object.entries(queries)
            .filter((item) => item[0].includes('Number') || item[0].includes('Code'))
            .filter((item) => item[1]);

        let queryCodesObj = { page: 1 };
        queryCodes.forEach((item) => {
            queryCodesObj[item[0]] = item[1];
        });
        const queryText = Object.entries(queries).filter(
            (item) => !item[0].includes('Code') || !item[0].includes('Number'),
        );
        let queryTextObj = {};
        queryText.forEach((item) => {
            queryTextObj[item[0]] = item[1];
        });
        let titleSearch = `${queryTextObj.category ? queryTextObj.category : 'Cho thuê tất cả'} ${
            queryTextObj.province ? `địa chỉ tại ${queryTextObj.province}` : ''
        } ${queryTextObj.price ? `giá ${queryTextObj.price}` : ''} ${
            queryTextObj.area ? `diện tích ${queryTextObj.area}` : ''
        } `;

        navigate(
            {
                pathname: `/${config.routes.search}`,
                search: createSearchParams(queryCodesObj).toString(),
            },
            { state: { titleSearch } },
        );
    };

    return (
        <>
            <div className="p-[10px] my-4 sm:mx-[100px] w-auto bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
                <span
                    onClick={() => handleShowModal(categories, 'category', 'Tìm tất cả')}
                    className="cursor-pointer flex-1"
                >
                    <SearchItem
                        IconBefore={<MdOutlineHouseSiding />}
                        fontWeight
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        text={queries.category}
                        defaultText={'Tìm tất cả'}
                    />
                </span>
                <span
                    onClick={() => handleShowModal(provinces, 'province', 'Toàn quốc')}
                    className="cursor-pointer flex-1"
                >
                    <SearchItem
                        IconBefore={<HiOutlineLocationMarker />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        text={queries.province}
                        defaultText={'Toàn quốc'}
                    />
                </span>
                <span onClick={() => handleShowModal(prices, 'price', 'Chọn giá')} className="cursor-pointer flex-1">
                    <SearchItem
                        IconBefore={<TbReportMoney />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        text={queries.price}
                        defaultText={'Chọn giá'}
                    />
                </span>
                <span
                    onClick={() => handleShowModal(areas, 'area', 'Chọn diện tích')}
                    className="cursor-pointer flex-1"
                >
                    <SearchItem
                        IconBefore={<RiCrop2Line />}
                        IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                        text={queries.area}
                        defaultText={'Chọn diện tích'}
                    />
                </span>
                <button
                    onClick={handleSearch}
                    type="button"
                    className="outline-none py-3 px-5 flex-1 bg-secondary1 text-[16px] flex items-center justify-center gap-2 text-white font-medium"
                >
                    <FiSearch />
                    Tìm kiếm
                </button>
            </div>
            {isShowModal && (
                <Model
                    handleSubmit={handleSubmit}
                    queries={queries}
                    arrMinMax={arrMinMax}
                    content={content}
                    name={name}
                    setIsShowModal={setIsShowModal}
                    defaultText={defaultText}
                />
            )}
        </>
    );
};

export default Search;
