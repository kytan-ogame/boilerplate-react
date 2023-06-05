import React, { lazy } from 'react';
import { RouteObject } from 'react-router';

import Loadable from '@components/loadable';

import Layout from './components/layout';

const HomePage = Loadable(lazy(() => import('@pages/home-page')));
const ContactPage = Loadable(lazy(() => import('@pages/contact-page')));

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
