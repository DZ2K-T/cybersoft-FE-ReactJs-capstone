import { Route } from "react-router-dom";
import HomeTemplate from "../_page/HomeTeplate";
import AdminTemplate from "../_page/AdminTeplate";
import AboutPage from "../_page/HomeTeplate/aboutPage";
import DashBoard from "../_page/AdminTeplate/dashboard";
import MovieManagementPage from "../_page/AdminTeplate/MovieManagementPage";
import AuthPage from "../_page/AdminTeplate/_auth";
import Addnew from "../_page/AdminTeplate/Addnew";
import formEdit from "../_page/AdminTeplate/UpdateFilm";
import ListMovie from "../_page/HomeTeplate/listMovie";
import Carousel from "../_page/HomeTeplate/Carousel";
// import Editfims from "../_page/AdminTeplate/editFilms";
import dangKy from "../_page/HomeTeplate/dangKi";
import dangNhap from "../_page/HomeTeplate/dangNhap";
import ListMovies from "../_page/HomeTeplate/listMovies";
import Showtime from "../_page/AdminTeplate/Showtime";

const routes = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "about",
        element: AboutPage,
      },

      {
        path: "me",
        element: Carousel,
      },
    ],
  },
  {
    path: "dangky",
    element: dangKy,
  },
  {
    path: "dangnhap",
    element: dangNhap,
  },
  {
    path: "list-movie",
    element: ListMovies,
  },
  {
    path: "admin",
    element: AdminTemplate,
    children: [
      {
        path: "dashboard",
        element: DashBoard,
      },
      {
        path: "films",
        element: MovieManagementPage,
      },
      {
        path: "films/addnew",
        element: Addnew,
      },
      // {
      //   path: "films/edit/:id",
      //   element: Editfims,
      // },
      {
        path: "films/edit/:idFilm",
        element: formEdit,
      },
      {
        path: "films/showtime/:idFilm",
        element: Showtime,
      },
    ],
  },
  {
    path: "auth",
    element: AuthPage,
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            ></Route>
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
