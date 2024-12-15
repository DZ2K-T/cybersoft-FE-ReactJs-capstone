import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "./duck/reducer"; 
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [matKhauConfirm, setMatKhauConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [soDt, setSoDt] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!taiKhoan.trim()) return "Tài khoản không được để trống!";
    if (!matKhau.trim()) return "Mật khẩu không được để trống!";
    if (matKhau !== matKhauConfirm) return "Mật khẩu xác nhận không trùng khớp!";
    if (!email.trim()) return "Email không được để trống!";
    if (!soDt.trim()) return "Số điện thoại không được để trống!";
    if (!hoTen.trim()) return "Họ tên không được để trống!";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setValidationError(error);
      return;
    }
    const newUser = {
      taiKhoan,
      matKhau,
      email,
      soDt,
      hoTen,
      maNhom: "GP01",  // Fixed maNhom
      maLoaiNguoiDung: "KhachHang"  // Fixed maLoaiNguoiDung
    };
    dispatch(register(newUser)); // Dispatching the register action
    setSuccessMessage("Đăng ký thành công!"); // Set the success message
    setTimeout(() => {
      navigate("/dangnhap"); // Redirect to the login page after a delay
    }, 2000); // Delay the navigation to allow the user to see the success message
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    // Reset validation error when user starts typing
    if (validationError) setValidationError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Đăng Ký</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="taiKhoan" className="block mb-2">Tài khoản</label>
            <input
              type="text"
              id="taiKhoan"
              value={taiKhoan}
              onChange={(e) => handleInputChange(e, setTaiKhoan)}
              placeholder="Tên tài khoản"
              className="w-full p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="matKhau" className="block mb-2">Mật khẩu</label>
            <input
              type="password"
              id="matKhau"
              value={matKhau}
              onChange={(e) => handleInputChange(e, setMatKhau)}
              placeholder="Mật khẩu"
              className="w-full p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="matKhauConfirm" className="block mb-2">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="matKhauConfirm"
              value={matKhauConfirm}
              onChange={(e) => handleInputChange(e, setMatKhauConfirm)}
              placeholder="Xác nhận mật khẩu"
              className="w-full p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              placeholder="name@domain.com"
              className="w-full p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="soDt" className="block mb-2">Số điện thoại</label>
            <input
              type="tel"
              id="soDt"
              value={soDt}
              onChange={(e) => handleInputChange(e, setSoDt)}
              placeholder="Số điện thoại"
              className="w-full p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="hoTen" className="block mb-2">Họ và tên</label>
            <input
              type="text"
              id="hoTen"
              value={hoTen}
              onChange={(e) => handleInputChange(e, setHoTen)}
              placeholder="Họ và tên đầy đủ"
              className="w-full p-2"
              required
            />
          </div>
          {validationError && <p className="text-red-500 text-sm">{validationError}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          <button type="submit" className="w-full p-2 bg-blue-600 text-white">Đăng ký</button>
        </form>
      </div>
    </div>
  );
}
