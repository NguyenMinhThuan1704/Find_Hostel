import React from 'react';

function ForgotPassword() {
    return (
        <div className="flex justify-center items-center bg-gray-100 p-[30px] ">
            <div className="bg-white shadow-lg border-solid border rounded-lg p-12 w-full max-w-[600px]">
                <h2 className="text-[30px] font-bold mb-8 text-center">Quên mật khẩu</h2>
                <p className="text-[14px] text-center mb-4">
                    Vui lòng nhập số điện thoại liên kết với tài khoản của bạn để nhận mã đặt lại mật khẩu
                </p>
                <form>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-3-xl font-bold mb-2" htmlFor="phone">
                            Số điện thoại
                        </label>
                        <input
                            id="phone"
                            type="text"
                            className="shadow appearance-none border rounded w-full bg-[#e8f0fe] p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-8">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold p-6 rounded focus:outline-none focus:shadow-outline"
                        >
                            Tiếp tục
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
