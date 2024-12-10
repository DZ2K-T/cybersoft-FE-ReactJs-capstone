import { useState, useEffect } from "react";
import { authLogin } from "./duck/reducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const dispath = useDispatch();
  const props = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (props.data?.maLoaiNguoiDung === "QuanTri") {
      navigate("/admin/films");
    } else if (props.data?.maLoaiNguoiDung === "KhachHang") {
      navigate("/test");
    }
  }, [props.data]);

  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const hanldeOnchange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnChange = (e) => {
    // ngăn load trang
    e.preventDefault();
    dispath(authLogin(user));
  };
  if (props.error?.data?.content) return <p>Loading...</p>;

  const renderError = () => {
    const { error } = props;
    if (error) {
      return (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">{props.error.data.content}</span>
        </div>
      );
    }
  };

  return (
    <form onSubmit={handleOnChange} className="max-w-sm mx-auto">
      {renderError()}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          onChange={hanldeOnchange}
          name="taiKhoan"
          autoComplete="username"
          type="text"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          onChange={hanldeOnchange}
          name="matKhau"
          autoComplete="current-password"
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
