/*
  Routes for whole react application
*/

import React from 'react';
import APPLICATION_URL from './ApplicationUrls';
import LOCALIZATION from '../services/LocalizationService';

// Routes

// Left Menus
const Dashboard = React.lazy(() => import('../components/Pages/Dashboard'));


const ROUTES = [
  { path: APPLICATION_URL.DASHBOARD, exact: true, name: LOCALIZATION.DASHBOARD, component: Dashboard },
];

export default ROUTES;