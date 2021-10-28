import './App.css';
import LOCALIZATION from './common/services/LocalizationService';
//import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import Page404 from './components/ErrorPages/Page404';
import Page500 from './components/ErrorPages/Page500';
import APP_URL from './common/applicationUrls';

// import { message } from 'antd';

// Redux
// import { useSelector } from "react-redux";
// import Loading from "./components/Loading/Loading";

import { BrowserRouter, Switch, Route } from 'react-router-dom'; //https://css-tricks.com/the-hooks-of-react-router/
// import Loadable from "react-loadable";

// Base Layout
// const BaseLayout = Loadable({
//   loader: () => import("./components/BaseLayout/BaseLayout"),
//   loading: Loading,
// });


function App() {
  return (
    <div className="App">
      <h1>{LOCALIZATION.GALVMED}</h1>
      <BrowserRouter >
        <Switch>
          {/* 
            Open Routes Here 
          */}

          {/* Login */}
          {/* <Route
            path={ APP_URL.LOGIN }
            name={ LOCALIZATION.LOGIN }
            component={ Login }
          /> */}

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
          {/* <PrivateRoute path="/" name={ LOCALIZATION.HOME } component={ BaseLayout } /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
