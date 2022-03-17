import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const ErrorBoundary = lazy(() => import('pages/ErrorBoundary'));
const Login = lazy(() => import('pages/Login'));
const PublicRoute = lazy(() => import('./publicRoute'));
const UserList = lazy(() => import('pages/UsersList'));
const UserDetail = lazy(() => import('pages/UserDetail'));
const Default = lazy(() => import('layouts/default'));
const NotFound = lazy(() => import('pages/NotFound'));
const RouterApp = () => {
  return (
    <Suspense fallback={<></>}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Default />}>
              <Route element={<PublicRoute />}>
                <Route index element={<Login />} />
              </Route>
              <Route path='users'>
                <Route index element={<UserList />} />
                <Route path=':id' element={<UserDetail />} />
              </Route>
            </Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Suspense>
  );
};

export default RouterApp;
