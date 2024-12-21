import React from 'react';
import { useSelector } from 'react-redux';

function Information({ payload, setPayload }) {
    const { categories } = useSelector((state) => state.app);
    const { currentData } = useSelector((state) => state.user);

    const handleChange = (e) => {
        setPayload({
            ...payload,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h2 className="font-semibold text-[22px] mb-6">Thông tin mô tả</h2>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="category-select" className="font-medium">
                        Loại chuyên mục
                    </label>
                    <select
                        id="category-select"
                        name="categoryCode"
                        value={payload.categoryCode}
                        onChange={handleChange}
                        className="outline-none border border-gray-300 p-2 rounded-md w-full"
                    >
                        <option value="">-- Chọn loại chuyên mục --</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.code}>
                                {category.value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <div>Tiêu đề</div>
                    <input
                        type="text"
                        name="title"
                        value={payload.title}
                        onChange={handleChange}
                        className="border border-solid border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="desc" className="font-medium">
                        Nội dung mô tả
                    </label>
                    <textarea
                        id="desc"
                        name="description"
                        value={payload.description}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                        className="outline-none border border-solid border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div>Thông tin liên hệ</div>
                    <input
                        type="text"
                        readOnly
                        className="border border-gray-300 bg-gray-200 p-4 rounded-md w-1/2"
                        value={currentData?.name || currentData?.username || ''}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div>Điện thoại</div>
                    <input
                        type="text"
                        readOnly
                        className="border border-gray-300 bg-gray-200 p-4 rounded-md w-1/2"
                        value={currentData?.phone || ''}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">Giá cho thuê</label>
                    <div className="flex items-center max-w-[374.5px]">
                        <input
                            type="text"
                            name="priceNumber"
                            value={payload.priceNumber}
                            onChange={handleChange}
                            className="border border-solid border-gray-300 p-[7px] rounded-md w-full"
                        />
                        <span className="p-2 border flex-none w-30 flex items-center justify-center rounded-tr-md rounded-br-md bg-gray-200">
                            đồng/tháng
                        </span>
                    </div>
                    <small className="opacity-70">Nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000</small>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title">Diện tích</label>
                    <div className="flex items-center max-w-[374.5px]">
                        <input
                            type="number"
                            name="areaNumber"
                            value={payload.areaNumber}
                            onChange={handleChange}
                            className="border border-solid border-gray-300 p-[7px] rounded-md w-full"
                        />
                        <span className="p-2 border flex-none w-30 flex items-center justify-center rounded-tr-md rounded-br-md bg-gray-200">
                            m<sup>2</sup>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="category-select" className="font-medium">
                        Đối tượng cho thuê
                    </label>
                    <select
                        id="target-select"
                        name="target"
                        value={payload.target}
                        onChange={handleChange}
                        className="outline-none border border-gray-300 p-2 rounded-md w-1/2"
                    >
                        <option value="Tất cả">-- Tất cả --</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Information;
