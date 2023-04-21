import { createBrowserRouter } from "react-router-dom";

import { Home, Loader as HomeLoader } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { ErrorPage } from '../pages/ErrorPage'
import { Favs } from "../pages/Favs";
import { Account } from "../pages/Account";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: HomeLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/photos/:categoryId",
    element: <Home />,
    loader: HomeLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail/:photoId",
    element: <Detail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/favs",
    element: <Favs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: <Account />,
    errorElement: <ErrorPage />,
  },
]);