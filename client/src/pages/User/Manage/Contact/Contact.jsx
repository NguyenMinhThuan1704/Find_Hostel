import React from 'react';

function Contact() {
    return (
        <div>
            <h1 className="my-0 border-b border-b-slate-400">Liên hệ</h1>
            <div className="p-8 mt-8 bg-white shadow-md rounded-md flex flex-col lg:flex-row gap-8">
                {/* Contact Information Section */}
                <div className="flex-1 p-6 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg">
                    <h2 className="font-semibold text-3xl mb-4">Thông tin liên hệ</h2>
                    <p className="mb-4">
                        Chúng tôi biết bạn có rất nhiều sự lựa chọn. Nhưng cảm ơn vì đã lựa chọn PhongTro123.Com
                    </p>
                    <p className="mb-4">
                        <strong>Điện thoại:</strong> 0123 456 789
                    </p>
                    <p className="mb-4">
                        <strong>Email:</strong> cskh.phongtro123@gmail.com
                    </p>
                    <p className="mb-4">
                        <strong>Zalo:</strong> 0123 456 789
                    </p>
                    <p className="mb-4">
                        <strong>Viber:</strong> 0123 456 789
                    </p>
                    <p className="mt-4">
                        <strong>Địa chỉ:</strong> Căn 02.34, Lầu 2, Tháp 3, The Sun Avenue, Số 28 Mai Chí Thọ, Phường An
                        Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam.
                    </p>
                </div>

                {/* Contact Form Section */}
                <div className="flex-1 bg-gray-100 p-6 rounded-lg">
                    <h2 className="font-semibold text-3xl mb-4">Liên hệ trực tuyến</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block mb-2 text-2xl font-medium" htmlFor="name">
                                Họ tên của bạn
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Họ tên của bạn"
                                className="w-full p-3 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-2xl font-medium" htmlFor="phone">
                                Số điện thoại
                            </label>
                            <input
                                id="phone"
                                type="text"
                                placeholder="Số điện thoại"
                                className="w-full p-3 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-2xl font-medium" htmlFor="message">
                                Nội dung
                            </label>
                            <textarea
                                id="message"
                                placeholder="Nội dung"
                                className="w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-0"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
                        >
                            Gửi liên hệ
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
