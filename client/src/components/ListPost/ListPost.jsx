import React, { useState } from 'react';
import ListItem from './ListItem';
import ScrollToTop from 'components/ScrollToTop';

function ListPost({ postData, page }) {
    const [activeButton, setActiveButton] = useState('default');

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

            {postData?.length > 0 ? (
                postData.map((post) => <ListItem key={post.id} post={post} />)
            ) : (
                <p className="text-center text-[20px] my-4">Không có bài đăng nào</p>
            )}
        </div>
    );
}

export default ListPost;
