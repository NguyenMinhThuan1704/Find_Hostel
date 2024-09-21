import Image from 'components/Image';
import React from 'react';
import { Link } from 'react-router-dom';

function NewPost({ data }) {
    return (
        <div className="border border-solid rounded-xl bg-white">
            <div className="p-6">
                <h2 className="font-bold text-[18px] mb-4">{data.title}</h2>
                <div className="space-y-4">
                    {data.posts.map((post, index) => (
                        <Link
                            to="#"
                            key={index}
                            className="flex items-start space-x-3 group pb-4 border-b border-[#eee]"
                        >
                            <Image
                                src={post.img}
                                alt={post.name}
                                className="w-[60px] h-[60px] object-cover rounded-md"
                            />

                            <div className="flex-1">
                                <h3 className="text-[14px] font-bold text-gray-800 group-hover:text-blue-600 leading-snug">
                                    {post.name}
                                </h3>
                                <div className="flex justify-between">
                                    <p className="text-green-600 text-[13px] font-semibold">{post.price}</p>
                                    <p className="text-gray-500 text-[12px]">{post.time}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewPost;
