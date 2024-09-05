import Image from 'components/Image';
import React from 'react';
import icons from 'utils/icons';

const { GrStar } = icons;

function ListItem() {
    return (
        <div className="p-4 bg-[#fff9f3] border border-solid border-[#E13427] border-x-0">
            <div className="flex">
                <div className="w-2/5">
                    <Image
                        className="w-[280px] h-[240px] p-4 object-cover rounded-3xl"
                        src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/07/27/img-2047_1722050282.jpg"
                    />
                </div>
                <div className="w-3/5 py-3">
                    <div className="text-red-500">
                        <GrStar className="inline-block pb-2" size={20} color="yellow" />
                        <GrStar className="inline-block pb-2" size={20} color="yellow" />
                        <GrStar className="inline-block pb-2" size={20} color="yellow" />
                        <GrStar className="inline-block pb-2" size={20} color="yellow" />
                        <GrStar className="inline-block pb-2" size={20} color="yellow" />
                        Phòng trọ FULL Nội Thất, giờ giấc tự do ngay công viên Hoàng Văn Thụ.
                    </div>
                    <div className="flex h-[20px] justify-between my-4">
                        <p className="w-[25%] font-bold text-green-500">4 triệu/tháng</p>
                        <p className="w-[25%]">20m²</p>
                        <p className="w-1/2 line-clamp-1" title="Quận Tân Bình, Hồ Chí Minh">
                            Quận Tân Bình, Hồ Chí Minh
                        </p>
                    </div>
                    <div className="flex justify-end mr-4 my-4">
                        <p>44 phút trước</p>
                    </div>
                    <div>
                        <p className="line-clamp-3 text-[14px]">
                            Cách CV Hoàng Văn Thụ 150mCách ĐH Tài Chính Marketing 300mDiện tích 20m2Mức giá: 3tr3Địa
                            chỉ: Phạm Cự Lượng, P2, Tân Bình.Mô tả:- Có máy lạnh-điều hòa
                        </p>
                    </div>
                    <div className="my-4 flex justify-between">
                        <div className="flex items-center w-[45%]">
                            <Image className="w-[40px] h-[40px] rounded-full border border-solid mr-4" src="eqeqweq" />
                            <p>Name</p>
                        </div>

                        <button className="w-[30%] bg-blue-600 text-white rounded-2xl">Gọi 0123456789</button>
                        <button className="w-[20%] text-blue-600 border-blue-600 border border-solid rounded-2xl hover:bg-blue-600 hover:text-white">
                            Nhắn zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;
