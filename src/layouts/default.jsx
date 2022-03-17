import React from 'react';
import { Outlet } from 'react-router-dom';

const Default = () => {
  return (
    <main className='my-5'>
      <Outlet />
    </main>
  );
};

export default Default;
