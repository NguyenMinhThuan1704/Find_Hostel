import React from 'react';
import CreatePost from '../../CreatePost';

function UpdatePost({ setIsEdit }) {
    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto bg-overlay-70 z-40 flex justify-center items-center"
            onClick={(e) => {
                e.stopPropagation();
                setIsEdit(false);
            }}
        >
            <div
                className="bg-white w-3/4 overflow-y-auto p-6 pt-[1060px]"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <CreatePost isEdit />
            </div>
        </div>
    );
}

export default UpdatePost;
