/*
  Actual application starts from this file
*/

import React from 'react';
import { 
  BrowserRouter, 
  Switch, 
  Route 
} from 'react-router-dom'; //https://css-tricks.com/the-hooks-of-react-router/
import Loadable from 'react-loadable';

// Antd
import { message } from 'antd';

// Application URLs
import APP_URL from './constants/applicationUrls';

// Components
import PrivateRoute from './components/PrivateRoute';
import Loading from './components/Loading';
import Page404 from './components/ErrorPages/Page404';
import Page500 from './components/ErrorPages/Page500';
import Login from './components/Pages/Login';

// Localization
import LOCALIZATION from './services/LocalizationService';

// Package.json
// let packageJson = require('../package.json');

message.config({
  maxCount: 1,
  duration: 3,
})

// Base Layout
const BaseLayout = Loadable({
  loader: () => import('./components/BaseLayout/BaseLayout'),
  loading: Loading
});

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          {/* 
            Open Routes Here 
          */}

          {/* Login */}
          <Route
            path={ APP_URL.LOGIN }
            name={ LOCALIZATION.LOGIN }
            component={ Login }
          />

          {/* Page 404 */}
          <Route
            path={ APP_URL.ERROR.PAGE404 }
            name={ LOCALIZATION.PAGE_404 }
            component={ Page404 }
          />

          {/* Page 500 */}
          <Route
            path={ APP_URL.ERROR.PAGE500 }
            name={ LOCALIZATION.PAGE_500 }
            component={ Page500 }
          />

          {/* Restricted Routes Here */}
          <PrivateRoute 
            component={ BaseLayout } 
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;