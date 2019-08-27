import React from 'react';
import { Route } from 'react-router-dom';

import SignIn from '~/pages/SignIn';

export default function PrivateRoute({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  const componentComputed = signed && isPrivate ? component : <SignIn />;

  return <Route {...rest}>{componentComputed}</Route>;
}
