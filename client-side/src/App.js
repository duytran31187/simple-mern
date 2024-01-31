import * as React from  'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
