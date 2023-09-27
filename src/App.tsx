import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import UserDetail from './Pages/UserDetail';
import RootLayout from './RootLayout';
import Login from './Pages/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {index:true, element:<Dashboard />},
      {path:'user-details/:id', element: <UserDetail />},
    ]
  },
  {
    path: '/login',
    element:<Login />
  }

])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
