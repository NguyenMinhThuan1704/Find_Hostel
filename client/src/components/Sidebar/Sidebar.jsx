/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import SidebarTwoRow from './SidebarTwoRow';
import SidebarOneRow from './SidebarOneRow';
import NewPost from './NewPost';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from 'store/actions';

function Sidebar() {
    const dispatch = useDispatch();
    const { categories, prices, areas } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(actions.getCategories());
        dispatch(actions.getPrices());
        dispatch(actions.getAreas());
    }, []);

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
            <SidebarTwoRow data={prices} type="priceCode" title="Xem theo giá" />
            <SidebarTwoRow data={areas} type="areaCode" title="Xem theo diện tích" />
            <SidebarOneRow data={categories} title="Danh mục cho thuê" />
            <NewPost data={newPostData} />
        </div>
    );
}

export default Sidebar;
