import React, { useContext } from 'react'
import { Context } from '../context/context'
import { Navigate, useLocation } from 'react-router-dom'

export const RequireAuth = ({ children, path = "/" }) => {
  const { isAuth } = useContext(Context)
  let location = useLocation()
  if (!isAuth) {
    return <Navigate to={path} state={{ from: location }} replace />
  }
  return children
}
