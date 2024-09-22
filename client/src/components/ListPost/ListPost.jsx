/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import ScrollToTop from 'components/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getPostsLimit } from 'store/actions';

function ListPost({ categoryCode, page }) {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { posts } = useSelector((state) => state.post);
    const [activeButton, setActiveButton] = useState('default');

    useEffect(() => {
        const searchParamsObject = Object.fromEntries(searchParams.entries());

        // Nếu có categoryCode, thêm vào đối tượng searchParamsObject
        if (categoryCode) {
            searchParamsObject.categoryCode = categoryCode;
        }

        // Dispatch để lấy dữ liệu bài đăng với các searchParams
        dispatch(getPostsLimit(searchParamsObject));
    }, [searchParams, categoryCode]);

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div className="border border-solid rounded-xl bg-white">
            <ScrollToTop page={page} />
            <div className="p-6">
                <h2 className="font-bold text-[18px]">Danh sách tin đăng</h2>
                <div className="flex items-center mt-4">
                    <p>Sắp xếp:</p>
                    <button
                        className={`bg-[#f1f1f1] border border-solid rounded-xl p-2 ml-4 ${activeButton === 'default' ? 'font-bold underline' : ''}`}
                        onClick={() => handleButtonClick('default')}
                    >
                        Mặc định
                    </button>
                    <button
                        className={`bg-[#f1f1f1] border border-solid rounded-xl p-2 ml-4 ${activeButton === 'newest' ? 'font-bold underline' : ''}`}
                        onClick={() => handleButtonClick('newest')}
                    >
                        Mới nhất
                    </button>
                    <button
                        className={`bg-[#f1f1f1] border border-solid rounded-xl p-2 ml-4 ${activeButton === 'video' ? 'font-bold underline' : ''}`}
                        onClick={() => handleButtonClick('video')}
                    >
                        Có video
                    </button>
                </div>
            </div>

            {posts?.length > 0 ? (
                posts.map((post) => <ListItem key={post.id} post={post} />)
            ) : (
                <p className="text-center text-[20px] my-4">Không có bài đăng nào</p>
            )}
        </div>
    );
}

export default ListPost;
