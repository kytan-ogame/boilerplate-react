import React, { lazy } from 'react';
import type { RouteObject } from 'react-router';

import Layout from '@components/layout';
import Loadable from '@components/loadable/loadable';

const HomePage = Loadable(lazy(() => import('@pages/home')));
const ContactPage = Loadable(lazy(() => import('@pages/contact')));

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
