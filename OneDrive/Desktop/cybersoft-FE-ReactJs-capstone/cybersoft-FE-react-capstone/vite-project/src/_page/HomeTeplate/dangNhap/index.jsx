import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./duck/reducer";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const props = useSelector((state) => state.authReducer);
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.dangNhap);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/"); // Navigate after login success
    } 
    // 
  }, [user, navigate]);

  const validateForm = () => {
    const errors = {};
    if (!taiKhoan.trim()) errors.taiKhoan = "Tài khoản không được để trống!";
    if (!matKhau.trim()) errors.matKhau = "Mật khẩu không được để trống!";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});
    dispatch(login({ taiKhoan, matKhau }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Tài khoản</label>
            <input
              type="text"
              value={taiKhoan}
              onChange={(e) => setTaiKhoan(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Nhập tài khoản"
            />
            {validationErrors.taiKhoan && (
              <p className="text-red-500 mt-1">{validationErrors.taiKhoan}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Mật khẩu</label>
            <input
              type="password"
              value={matKhau}
              onChange={(e) => setMatKhau(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Nhập mật khẩu"
            />
            {validationErrors.matKhau && (
              <p className="text-red-500 mt-1">{validationErrors.matKhau}</p>
            )}
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
          <a href="/dangki" className="text-blue-500">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
