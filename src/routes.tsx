import { FC, useMemo } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

interface RouteList {
  id: string;
  path?: string;
  component: FC;
  exact?: boolean;
}

export const RouteNames = {
  MAIN_ROUTE: 'MAIN_ROUTE',
  USER_DETAILS_ROUTE: 'USER_DETAILS_ROUTE',
  NOT_FOUND_ROUTE: 'NOT_FOUND_ROUTE',
};

const routes: RouteList[] = [
  {
    id: RouteNames.MAIN_ROUTE,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: RouteNames.USER_DETAILS_ROUTE,
    path: '/people/:id',
    exact: true,
    component: Details,
  },
  {
    id: RouteNames.NOT_FOUND_ROUTE,
    exact: true,
    component: NotFound,
  },
];

export const getRouteConfig = (id: string) => {
  const route = routes.find((route) => route.id === id);

  if (route) {
    const { component, ...props } = route;

    return { ...props };
  }

  return {};
};

export const Routes: FC = () => {
  const renderRoutes = useMemo(() => {
    return routes.map((route) => {
      const { id, ...props } = route;

      return <Route key={id} {...props} />;
    });
  }, []);

  return <Switch>{renderRoutes}</Switch>;
};
