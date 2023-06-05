import React, { Suspense } from 'react';

import { jsx } from '@emotion/react';

import SuspenseLoader from './suspense-loader';

import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes;

const Loadable =
  <T extends IntrinsicAttributes>(Component: React.FC<T>) =>
  (props: T) =>
    (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
      </Suspense>
    );

export default Loadable;
