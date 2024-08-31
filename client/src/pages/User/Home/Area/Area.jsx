import React from 'react';
import { location } from 'utils/constant';
import AreaItem from './AreaItem';

function Area() {
    return (
        <div className="my-6">
            <h2 className="text-center font-bold text-3xl">Khu vực nổi bật</h2>
            <div className="sm:flex items-center justify-center text-center">
                {location.map((item) => (
                    <AreaItem key={item.id} name={item.name} img={item.image} />
                ))}
            </div>
        </div>
    );
}

export default Area;
