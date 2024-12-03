import { Route } from "react-router-dom";
import HomeTemplate from "../_page/HomeTeplate";
import AdminTemplate from "../_page/AdminTeplate";
import AboutPage from "../_page/HomeTeplate/aboutPage";
import DashBoard from "../_page/AdminTeplate/dashboard";
import MovieManagementPage from "../_page/AdminTeplate/MovieManagementPage";
import AuthPage from "../_page/AdminTeplate/_auth";
import Addnew from "../_page/AdminTeplate/Addnew";
import Editfims from "../_page/AdminTeplate/editFilms";

const routes = [
  {
    path: "",
    element: HomeTemplate,
    children: [
      {
        path: "about",
        element: AboutPage,
      },
    ],
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
      {
        path: "films/edit/:id",
        element: Editfims,
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
