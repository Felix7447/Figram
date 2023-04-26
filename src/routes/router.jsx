import React, { useContext } from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Home, Loader as HomeLoader } from '../pages/Home'
import { Detail } from '../pages/Detail'
import { ErrorPage } from '../pages/ErrorPage'
import { Favs } from "../pages/Favs";
import { Account } from "../pages/Account";
import { NotRegisteredUser } from "../pages/NotRegisteredUser";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SingUpPage";
import { Context } from "../context/context";
import { RequireAuth } from "../container/RequireAuth";

export const router = createBrowserRouter(
createRoutesFromElements([
  <Route 
    path="/"
    element={<Home />}
    loader={HomeLoader}
    errorElement={<ErrorPage />}
  >
    <Route 
      path="/photos/:categoryId" 
      element={<Home />} 
      loader={HomeLoader}
      errorElement={<ErrorPage/>}
    />
  </Route>,
  <Route 
    path="/detail/:photoId" 
    element={<Detail />} 
    errorElement={<ErrorPage />}
  />,
  <Route 
    path='/favs' 
    element={
      <RequireAuth path="/NotRegisteredUser">
        <Favs />
      </RequireAuth>
    } 
    errorElement={<ErrorPage />}
  />,
  <Route 
    path='/account' 
    element={
      <RequireAuth path="/login">
        <Account />
      </RequireAuth>} 
    errorElement={<ErrorPage />}
  />,
  <Route 
    path='/NotRegisteredUser' 
    element={<NotRegisteredUser />} 
    errorElement={<ErrorPage />}
  />,
  <Route 
    path='/login' 
    element={<LoginPage />} 
    errorElement={<ErrorPage />}
  />,
  <Route 
    path='/singup' 
    element={<SignupPage />} 
    errorElement={<ErrorPage />}
  />
]));