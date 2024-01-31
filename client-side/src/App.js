import * as React from  'react';
import Button from  '@mui/material/Button';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    id: "rootRouter",
    children: [
      {index: true, element: <HomePage />},
      {path: '/create-post', element: <PostPage />},
      
    ]
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
