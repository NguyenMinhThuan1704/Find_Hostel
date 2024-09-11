import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from 'config';
import * as actions from 'store/actions';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Tên là bắt buộc'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 ký tự số')
        .required('Số điện thoại là bắt buộc'),
    password: Yup.string().required('Mật khẩu là bắt buộc'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    roleId: Yup.string().required('Loại tài khoản là bắt buộc'),
});

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        const payload = {
            name: values.name,
            phone: values.phone,
            password: values.password,
            email: values.email,
            roleId: values.roleId,
        };

        let isSuccess = await dispatch(actions.register(payload));
        if (isSuccess) {
            toast.success('Đăng ký thành công!');
            setTimeout(() => {
                isSuccess = false;
                navigate(config.routes.login);
            }, 2000);
        } else {
            toast.error('Đăng ký thất bại!');
        }

        setSubmitting(false);
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 p-[30px]">
            <ToastContainer />
            <div className="bg-white shadow-lg border-solid border rounded-lg p-12 w-full max-w-[600px]">
                <h2 className="text-[30px] font-bold mb-8 text-center">Tạo tài khoản mới</h2>
                <Formik
                    initialValues={{ name: '', phone: '', password: '', email: '', roleId: '1' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-3-xl font-bold mb-2" htmlFor="name">
                                    Họ và tên
                                </label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="shadow appearance-none border rounded w-full bg-[#e8f0fe] p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-600" />
                            </div>
                            <div className="mb-8">
                                <label className="block text-gray-700 text-3-xl font-bold mb-2" htmlFor="phone">
                                    Số điện thoại
                                </label>
                                <Field
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    className="shadow appearance-none border rounded w-full bg-[#e8f0fe] p-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-600" />
                            </div>
                            <div className="mb-8">
                                <label className="block text-gray-700 text-3-xl font-bold mb-2" htmlFor="password">
                                    Tạo mật khẩu
                                </label>
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="shadow appearance-none border rounded w-full bg-[#e8f0fe] p-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-600" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-3-xl font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="text"
                                    className="shadow appearance-none border rounded w-full bg-[#e8f0fe] p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600" />
                            </div>
                            <div className="mb-8">
                                <label className="block text-gray-700 text-3-xl font-bold mb-6">Loại tài khoản</label>
                                <div className="flex">
                                    <label className="flex-1 items-center">
                                        <Field
                                            type="radio"
                                            name="roleId"
                                            value="1"
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700">Tìm kiếm</span>
                                    </label>
                                    <label className="flex-1 items-center">
                                        <Field
                                            type="radio"
                                            name="roleId"
                                            value="2"
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700">Chính chủ</span>
                                    </label>
                                    <label className="flex-1 items-center">
                                        <Field
                                            type="radio"
                                            name="roleId"
                                            value="3"
                                            className="form-radio h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2 text-gray-700">Môi giới</span>
                                    </label>
                                </div>
                                <ErrorMessage name="roleId" component="div" className="text-red-600" />
                            </div>
                            <div className="mb-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold p-6 rounded focus:outline-none focus:shadow-outline"
                                >
                                    <p className="text-white">Tạo tài khoản</p>
                                </button>
                            </div>
                            <div className="grid mt-10">
                                <div className="flex mb-4">
                                    <p>
                                        Bấm vào nút tạo tài khoản tức là bạn đã đồng ý với{' '}
                                        <Link className="inline-block hover:underline align-baseline text-3-xl text-blue-500 hover:text-blue-800">
                                            quy định sử dụng
                                        </Link>{' '}
                                        của chúng tôi
                                    </p>
                                </div>
                                <div className="flex">
                                    <p>
                                        Bạn đã có tài khoản?{' '}
                                        <Link
                                            to={config.routes.login}
                                            className="inline-block hover:underline align-baseline text-3-xl text-blue-500 hover:text-blue-800"
                                        >
                                            Đăng nhập ngay
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Register;
