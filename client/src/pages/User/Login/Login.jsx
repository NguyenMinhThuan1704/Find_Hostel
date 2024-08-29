import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import config from 'config';
import * as actions from 'store/actions';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 ký tự số')
        .required('Số điện thoại là bắt buộc'),
    password: Yup.string().required('Mật khẩu là bắt buộc'),
});

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        const payload = {
            phone: values.phone,
            password: values.password,
        };

        const isSuccess = await dispatch(actions.login(payload));
        if (isSuccess) {
            toast.success('Đăng nhập thành công!');
            setTimeout(() => {
                navigate(config.routes.home);
            }, 2000);
        } else {
            toast.error('Đăng nhập thất bại!');
        }

        setSubmitting(false);
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 p-[30px] ">
            <ToastContainer />
            <div className="bg-white shadow-lg border-solid border rounded-lg p-12 w-full max-w-[600px]">
                <h2 className="text-[30px] font-bold mb-8 text-center">Đăng nhập</h2>
                <Formik
                    initialValues={{ phone: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
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
                                    Mật khẩu
                                </label>
                                <Field
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="shadow appearance-none border rounded w-full bg-[#e8f0fe] p-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-600" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold p-6 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Đăng nhập
                                </button>
                            </div>
                            <div className="flex justify-between mt-6">
                                <Link
                                    to={config.routes.forgotPassword}
                                    className="inline-block hover:underline align-baseline text-3-xl text-blue-500 hover:text-blue-800"
                                >
                                    Bạn quên mật khẩu?
                                </Link>
                                <Link
                                    to={config.routes.register}
                                    className="inline-block hover:underline align-baseline text-3-xl text-blue-500 hover:text-blue-800"
                                >
                                    Tạo tài khoản mới
                                </Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;