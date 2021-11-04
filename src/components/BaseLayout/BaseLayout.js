/* 
  Main Layout for application.
  It contains header, footer, body, routes
*/

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Constants
import APP_URL from '../../constants/ApplicationUrls';
import ROUTES from '../../constants/routes';

// Components
import Loading from '../Loading';

const BaseLayout = () => (
  <div className="main-app">
    <header className="site-header">
      {/* Top Menus */}
      Header
    </header>
    <section className="main-container">
      <div className="sidebar-nav">
        {/* Left Menus */}
        Left Menu
      </div>
      <div className="main-section">
        <Suspense fallback={<Loading/>}>
          <Switch>
            {
              ROUTES.map((route, index) => {
                let { 
                  path, name, exact, component: Component
                } = route;

                return(
                  <Route
                    key={ index }
                    path={ path }
                    exact={ exact }
                    name={ name }
                    render={() => (
                      <Component 
                        title={ route.name } 
                      />
                    )}
                  />
                )
              })
            }

            {/* Default case when application goes to root then waht should happens? */}
            <Redirect from="/" to={APP_URL.DASHBOARD} />
          </Switch>
        </Suspense>
      </div>
    </section>
  </div>
);

export default BaseLayout;