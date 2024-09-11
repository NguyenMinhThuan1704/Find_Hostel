import React from 'react';
import SidebarTwoRow from './SidebarTwoRow';
import SidebarOneRow from './SidebarOneRow';
import NewPost from './NewPost';

function Sidebar() {
    const priceData = {
        title: 'Xem theo giá',
        ranges: [
            ['Dưới 1 triệu', 'Từ 1 - 2 triệu'],
            ['Từ 2 - 3 triệu', 'Từ 3 - 5 triệu'],
            ['Từ 5 - 7 triệu', 'Từ 7 - 10 triệu'],
            ['Từ 10 - 15 triệu', 'Trên 15 triệu'],
        ],
    };

    const acreageData = {
        title: 'Xem theo diện tích',
        ranges: [
            ['Dưới 20m²', 'Từ 20 - 30m²'],
            ['Từ 30 - 50m²', 'Từ 50 - 70m²'],
            ['Từ 70 - 90m²', 'Trên 90m²'],
        ],
    };

    const acreageData1 = {
        title: 'Xem theo diện tích 1',
        ranges: [['Dưới 20m²'], ['Từ 30 - 50m²'], ['Trên 90m²']],
    };

    const newPostData = {
        title: 'Tin mới đăng',
        posts: [
            {
                img: 'https://via.placeholder.com/60',
                name: 'DUPLEX FULL NỘI THẤT MÁY GIẶT RIÊNG GẦN AN SƯƠNG',
                price: '3.7 triệu/tháng',
                time: '1 giờ trước',
            },
            {
                img: 'https://via.placeholder.com/60',
                name: 'Phòng trọ đẹp, thoáng mát an ninh, ngay chợ...',
                price: '4.5 triệu/tháng',
                time: '1 giờ trước',
            },
        ],
    };

    return (
        <div className="flex flex-col gap-6">
            <SidebarTwoRow data={priceData} />
            <SidebarTwoRow data={acreageData} />
            <SidebarOneRow data={acreageData1} />
            <NewPost data={newPostData} />
        </div>
    );
}

export default Sidebar;
