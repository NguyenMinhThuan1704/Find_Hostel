import React from 'react';
import SidebarTwoRow from './SidebarTwoRow';
import SidebarOneRow from './SidebarOneRow';

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

    return (
        <div className="flex flex-col gap-6">
            <SidebarTwoRow data={priceData} />
            <SidebarTwoRow data={acreageData} />
            <SidebarOneRow data={acreageData1} />
        </div>
    );
}

export default Sidebar;
