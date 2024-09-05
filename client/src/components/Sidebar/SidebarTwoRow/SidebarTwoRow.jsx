import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function SidebarTwoRow({ data }) {
    return (
        <div className="border border-solid rounded-xl bg-white">
            <div className="p-6">
                <h2 className="font-bold text-[18px]">{data.title}</h2>
                <div className="space-y-2 mt-6">
                    {data.ranges.map((range, index) => (
                        <div key={index} className="grid grid-cols-2 gap-2 border-b border-dashed border-gray-300 pb-2">
                            {range.map((item, idx) => (
                                <Link
                                    key={idx}
                                    className="text-[14px] flex items-center group text-gray-600 hover:text-orange-600"
                                >
                                    <FontAwesomeIcon
                                        icon={faAngleRight}
                                        className="mr-4 text-gray-400 text-[10px] group-hover:text-orange-600"
                                    />
                                    <p className="text-black group-hover:text-orange-600">{item}</p>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SidebarTwoRow;
