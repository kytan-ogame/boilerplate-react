import React, { lazy } from 'react';
import { RouteObject } from 'react-router';

import Layout from './components/layout';
import Loadable from './components/Loadable';

const HomePage = Loadable(lazy(() => import('./pages/HomePage')));
const ContactPage = Loadable(lazy(() => import('./pages/ContactPage')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: '*',
        element: <div>not found</div>,
      },
    ],
  },
];
export default routes;
