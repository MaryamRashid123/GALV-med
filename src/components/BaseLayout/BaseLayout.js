/* 
  Main Layout for application.
  It contains header, footer, body, routes
*/

import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Constants
import APP_URL from '../../constants/applicationUrls';

// Components
import Loading from '../Loading';

const BaseLayout = () => (
  <div className="main-app">
    <header className="site-header">
      {/* Top Menus */}
    </header>
    <section className="main-container">
      <div className="sidebar-nav">
        {/* Left Menus */}
      </div>
      <div className="main-section">
        <Suspense fallback={<Loading/>}>
          <Switch>
            {/* {
              routes.map((route, index) => {
                let { id, noId} = route;
                const actions = permissions[id];

                return route.component && (!!noId || (!!id && !!actions && !!actions.length)) ?
                  (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={compProps => (
                      <route.component 
                        {...compProps} 
                        title={ route.name } 
                        actions={ actions } 
                        permissions={ !!noId? permissions: null }
                      />
                    )}
                  />)
                  : (null);
              })
            } */}

            {/* Default case when application goes to root then waht should happens? */}
            <Redirect from="/" to={APP_URL.DASHBOARD} />
          </Switch>
        </Suspense>
      </div>
    </section>
  </div>
);

export default BaseLayout;