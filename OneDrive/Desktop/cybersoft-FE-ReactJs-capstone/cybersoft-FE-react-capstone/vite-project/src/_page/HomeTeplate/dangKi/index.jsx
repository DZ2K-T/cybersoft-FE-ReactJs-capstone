import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
export default function Register() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="bg-white shadow-md dark:bg-gray-900 rounded-lg w-full max-w-md p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Đăng Ký
          </h1>
          <form className="space-y-5">
            {/* Tài khoản */}
            <div>
              <label
                htmlFor="taiKhoan"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tài khoản
              </label>
              <input
                type="text"
                id="taiKhoan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tên tài khoản"
                required
              />
            </div>
            {/* Mật khẩu */}
            <div>
              <label
                htmlFor="matKhau"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu
              </label>
              <input
                type="password"
                id="matKhau"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mật khẩu"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            {/* Số điện thoại */}
            <div>
              <label
                htmlFor="soDt"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Số điện thoại
              </label>
              <input
                type="tel"
                id="soDt"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Số điện thoại"
                required
              />
            </div>
            {/* Mã nhóm */}
            <div>
              <label
                htmlFor="maNhom"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mã nhóm
              </label>
              <input
                type="text"
                id="maNhom"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Mã nhóm"
                required
              />
            </div>
            {/* Họ tên */}
            <div>
              <label
                htmlFor="hoTen"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="hoTen"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Họ và tên đầy đủ"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
