/*
  Routes for whole react application
*/

import React from 'react';
import APPLICATION_URL from './applicationUrls';
import LOCALIZATION from '../services/LocalizationService';

// Routes

// Left Menus
const Dashboard = React.lazy(() => import('../components/Pages/Dashboard/Dashboard'));


const routes = [
  // Left menu Routes
  { path: APPLICATION_URL.DASHBOARD, exact: true, name: LOCALIZATION.DASHBOARD, component: Dashboard, noId: true },

];

export default routes;