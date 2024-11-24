import { Route } from "react-router-dom";
import HomeTemplate from "../_page/HomeTeplate";
import AdminTemplate from "../_page/AdminTeplate";
import AboutPage from "../_page/HomeTeplate/aboutPage";
import DashBoard from "../_page/AdminTeplate/dashboard";

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
    ],
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
