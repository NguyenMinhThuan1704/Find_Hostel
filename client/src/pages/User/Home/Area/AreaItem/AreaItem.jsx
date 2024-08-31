import Image from 'components/Image';
import React from 'react';
import { Link } from 'react-router-dom';

function AreaItem({ name, img }) {
    console.log(name, img);

    return (
        <Link className="bg-white grid text-center rounded-xl shadow-lg m-4 hover:shadow-xl group">
            <Image className=" w-full h-[200px] sm:w-[220px] sm:h-[110px] object-cover rounded-t-xl" src={img} />
            <p className="p-[6px] text-[#1266dd] font-semibold group-hover:text-[#f60]">{name}</p>
        </Link>
    );
}

export default AreaItem;
