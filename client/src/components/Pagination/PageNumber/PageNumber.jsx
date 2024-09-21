import React from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const notActive =
    'min-h-[40px] min-w-[48px] flex items-center justify-center bg-white hover:bg-gray-300 rounded-md cursor-pointer';
const active =
    'min-h-[40px] min-w-[48px] flex items-center justify-center bg-[#E13427] text-white rounded-md cursor-pointer';

const PageNumber = ({ text, currentPage, icon, setCurrentPage }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [paramsSeach] = useSearchParams();
    let entries = paramsSeach.entries();

    const append = (entries) => {
        let params = [];
        paramsSeach.append('page', +text);
        for (let entry of entries) {
            params.push(entry);
        }
        let searchParamsObject = {};
        params?.forEach((i) => {
            if (Object.keys(searchParamsObject)?.some((item) => item === i[0] && item !== 'page')) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
            }
        });
        return searchParamsObject;
    };

    const handleChangePage = () => {
        if (!(text === '...')) {
            setCurrentPage(+text);
            navigate({
                pathname: location?.pathname,
                search: createSearchParams(append(entries)).toString(),
            });
        }
    };
    return (
        <div
            className={
                +text === +currentPage
                    ? `${active} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`
                    : `${notActive} ${text === '...' ? 'cursor-text' : 'cursor-pointer'}`
            }
            onClick={handleChangePage}
        >
            {icon || text}
        </div>
    );
};

export default PageNumber;
