import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Root from './routes/root';
import Homepage from './components/Homepage';
import Math from './components/Math';
import Storytime from './components/Storytime';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"name",
        element: <Homepage />
      },
      {
        path:"one-plus-one",
        element: <Math />
      },
      {
        path:"storytime",
        element: <Storytime />
      }
    ]
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

