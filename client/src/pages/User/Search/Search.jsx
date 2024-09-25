import React from 'react';
import ListPost from 'components/ListPost';
import Sidebar from 'components/Sidebar';
import Pagination from 'components/Pagination';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function Search() {
    const location = useLocation();

    const [searchParams] = useSearchParams();

    const page = searchParams.get('page');

    return (
        <div className="w-full flex flex-col gap-3">
            <div>
                <h1 className="text-[28px] font-bold">{location.state?.titleSearch || 'Kết quả tìm kiếm'}</h1>
                <p className="text-gray-700">{`${location.state?.titleSearch || ''} Phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.`}</p>
            </div>
            <div className="w-full flex gap-4">
                <div className="w-2/3">
                    <ListPost page={page} />
                    <Pagination page={1 || 0} />
                </div>
                <div className="w-1/3">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default Search;
