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
    const { newPosts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(actions.getCategories());
        dispatch(actions.getPrices());
        dispatch(actions.getAreas());
        dispatch(actions.getNewPosts());
    }, []);

    return (
        <div className="flex flex-col gap-6">
            <SidebarTwoRow data={prices} type="priceCode" title="Xem theo giá" />
            <SidebarTwoRow data={areas} type="areaCode" title="Xem theo diện tích" />
            <SidebarOneRow data={categories} title="Danh mục cho thuê" />
            <NewPost data={newPosts} title="Tin mới đăng" />
        </div>
    );
}

export default Sidebar;
