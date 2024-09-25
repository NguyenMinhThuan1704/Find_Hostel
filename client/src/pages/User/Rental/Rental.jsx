/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import { formatVietnameseToString } from 'utils/Common/formatVietnameseToString';
import Area from '../Home/Area';
import ListPost from 'components/ListPost';
import Pagination from 'components/Pagination';
import Sidebar from 'components/Sidebar';

function Rental() {
    const { categories } = useSelector((state) => state.app);
    const [categoryCurrent, setCategoryCurrent] = useState({});
    const [categoryCode, setCategoryCode] = useState('none');
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const page = searchParams.get('page');
    useEffect(() => {
        const category = categories?.find((item) => `/${formatVietnameseToString(item.value)}` === location.pathname);

        setCategoryCurrent(category);
        if (category) {
            setCategoryCode(category.code);
        }
    }, [location]);

    return (
        <div>
            <div className="text-center">
                <h1 className="m-2 font-bold">{categoryCurrent?.header}</h1>
                <p className="text-gray-500">{categoryCurrent?.subheader}</p>
            </div>

            <Area />

            <div className="w-full flex gap-4">
                <div className="w-2/3">
                    <ListPost categoryCode={categoryCode} page={page} />
                    <Pagination page={1 || 0} />
                </div>
                <div className="w-1/3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Rental;
