import React from 'react';
import SearchItem from './SearchItem';
import icons from 'utils/icons';

const { BsChevronRight, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, MdOutlineHouseSiding, FiSearch } = icons;

const Search = () => {
    return (
        <div className="p-[10px] my-4 sm:mx-[100px] w-auto bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
            <SearchItem
                IconBefore={<MdOutlineHouseSiding />}
                fontWeight
                IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                text="Phòng trọ, nhà trọ"
            />
            <SearchItem
                IconBefore={<HiOutlineLocationMarker />}
                IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                text="Toàn quốc"
            />
            <SearchItem
                IconBefore={<TbReportMoney />}
                IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                text="Chọn giá"
            />
            <SearchItem
                IconBefore={<RiCrop2Line />}
                IconAfter={<BsChevronRight color="rgb(156, 163, 175)" />}
                text="Chọn diện tích"
            />
            <button
                type="button"
                className="outline-none p-3 w-full bg-secondary1 text-[14px] rounded-lg flex items-center justify-center gap-2 text-white font-medium"
            >
                <FiSearch />
                Tìm kiếm
            </button>
        </div>
    );
};

export default Search;
