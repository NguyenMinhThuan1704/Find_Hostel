import React from 'react';
import Area from './Area';

function Home() {
    return (
        <div>
            <div className="text-center">
                <h1 className="m-2 font-bold">Tìm kiếm chỗ thuê ưng ý</h1>
                <p className="text-gray-500">
                    Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn
                    hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.
                </p>
            </div>

            <Area />
        </div>
    );
}

export default Home;
