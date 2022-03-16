import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
const ErrorBoundary = lazy(() => import('pages/ErrorBoundary'));

const RouterApp = () => {
  return (
    <Suspense fallback={<></>}>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Suspense>
  );
};

export default RouterApp;
