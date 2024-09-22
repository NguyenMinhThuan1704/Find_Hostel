import React from 'react';
import NewPostItem from './NewPostItem';

function NewPost({ data, title }) {
    return (
        <div className="border border-solid rounded-xl bg-white">
            <div className="p-6">
                <h2 className="font-bold text-[18px] mb-4">{title}</h2>
                <div className="space-y-4">
                    {data?.length > 0 ? (
                        data.map((post) => <NewPostItem key={post.id} data={post} />)
                    ) : (
                        <p className="text-center text-[20px] my-4">Không có bài đăng nào</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NewPost;
