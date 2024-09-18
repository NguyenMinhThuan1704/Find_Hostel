import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

const notActive =
    'min-h-[40px] min-w-[48px] flex items-center justify-center bg-white hover:bg-gray-300 rounded-md cursor-pointer';
const active =
    'min-h-[40px] min-w-[48px] flex items-center justify-center bg-[#E13427] text-white rounded-md cursor-pointer';

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
    const navigate = useNavigate();
    const handleChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text);
            navigate({
                pathname: '/',
                search: createSearchParams({
                    page: text,
                }).toString(),
            });
        }
    };
    return (
        <div
            className={
                +text === +currentPage
                    ? `${active} ${text === '...' ? 'cursor-default' : 'cursor-pointer'}`
                    : `${notActive} ${text === '...' ? 'cursor-default' : 'cursor-pointer'}`
            }
            onClick={handleChangePage}
        >
            {icon || text}
        </div>
    );
};

export default PageNumber;
