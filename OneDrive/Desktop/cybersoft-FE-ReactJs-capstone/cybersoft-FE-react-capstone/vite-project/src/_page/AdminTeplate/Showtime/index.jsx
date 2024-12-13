import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faMagnifyingGlass,
  faPenToSquare,
  faTv,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthInforFilm } from "../inforFilms/duck/reducer";
import { useParams } from "react-router-dom";
import { fecthInforCumrap, fecthInforCinema, showtime } from "./duck/reducer";

export default function Showtime() {
  const [formState, setFormState] = useState({
    heThongRap: "",
    cumRap: "",
    ngayChieu: "",
    giaVe: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showtime(formState)); // Gửi dữ liệu tạo lịch chiếu
  };
  const props = useSelector((state) => state.inforFilmReducer);

  const { idFilm } = useParams();

  const dispatch = useDispatch();

  const heThongRap = useSelector((state) => {
    state.creatShowTimeReducer;
  });
  console.log(heThongRap);

  useEffect(() => {
    if (idFilm) {
      dispatch(fecthInforFilm(idFilm));
    }
    dispatch(fecthInforCinema());
  }, [idFilm, dispatch]);
  // if (!props?.data) {
  //   return <div>Loading phim ....</div>;
  // }

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src="https://w7.pngwing.com/pngs/298/685/png-transparent-movies-logo-backsheet-hand-painted-practical.png"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white text-orange-500">
                  AYO! FILM
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/217547034_541490913872359_6533652150174378304_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=o1APX21PGdwQ7kNvgE_9R8O&_nc_zt=23&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=ABSfFzwXiL1dOFIt3ouNH-E&oh=00_AYCv0l8gMFoHHyVEpYcsbMieF_hn2XFqwXLcTE8Lo7TTEA&oe=67532FCF"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-600 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <FontAwesomeIcon icon={faFile} />

                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Films
                </span>

                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul id="dropdown-example" className="hidden py-2 space-y-2">
                <li>
                  <Link
                    to={"/admin/films"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <span className="mr-3">
                      <FontAwesomeIcon icon={faFile} /> Film
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admin/films/addnew"}
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <span className="">
                      <FontAwesomeIcon icon={faFile} />
                      Add new
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={faTv} />
                <span className="flex-1 ms-3 whitespace-nowrap">Showtime</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="sm:rounded-lg pl-2 mb-3 ">
            <h1 className="font-bold mb-3">
              TẠO LỊCH CHIẾU - {props.data?.tenPhim}
            </h1>
            <img
              className="rounded-lg shadow-md w-48"
              src={props.data?.hinhAnh}
              alt={props.data?.hinhAnh}
            />
          </div>
          <form className="max-w-sm mx-auto mt-20">
            <div className="flex items-center mb-4">
              <label
                htmlFor="countries"
                className="w-32 text-sm font-medium text-gray-900 dark:text-white"
              >
                Hệ thống rạp:
              </label>
              <input
                onChange={handleChange}
                list="hethongrap-options"
                id="hethongrap"
                name="hethongrap"
                className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Chọn hệ thống rạp"
              />
              <datalist id="hethongrap-options">
                <option value="United States" />
              </datalist>
            </div>
            <div className="flex items-center mb-4">
              <label
                htmlFor="cumrap"
                className="w-32 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cụm rạp:
              </label>
              <input
                onChange={handleChange}
                list="country-options"
                id="cumrap"
                name="cumrap"
                className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Chọn cụm rạp"
              />
              <datalist id="country-options">
                <option value="United States" />
              </datalist>
            </div>
            <div className="flex items-center mb-4">
              <label
                htmlFor="ngaychieu"
                className="w-32 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ngày chiếu giờ chiếu:
              </label>
              <input
                onChange={handleChange}
                type="date"
                id="ngaychieu"
                name="ngaychieu"
                className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="select date"
              />
            </div>
            <div className="flex items-center mb-4">
              <label
                htmlFor="Giave"
                className="w-32 text-sm font-medium text-gray-900 dark:text-white"
              >
                Giá vé:
              </label>
              <input
                onChange={handleChange}
                className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="Chucnang"
                className="w-32 text-sm font-medium text-gray-900 dark:text-white"
              >
                Chức năng:
              </label>
              <button
                onClick={handleSubmit}
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Tạo lịch chiếu
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
