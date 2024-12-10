import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./duck/reducer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ taiKhoan, matKhau }));
  };

  // Điều hướng nếu đăng nhập thành công
  if (user) {
    navigate("/home"); // Thay `/dashboard` bằng trang bạn muốn
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Tài khoản</label>
            <input
              type="text"
              value={taiKhoan}
              onChange={(e) => setTaiKhoan(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Nhập tài khoản"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Mật khẩu</label>
            <input
              type="password"
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white bg-blue-500 rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
        <p className="mt-4 text-center">
          Chưa có tài khoản?{" "}
          <a href="/register" className="text-blue-500">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
