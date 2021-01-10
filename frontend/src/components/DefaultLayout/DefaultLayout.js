import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";

// routes config
import routes from "../../route";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

// const DefaultAside = React.lazy(() => import("./DefaultAside"));
// const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
// const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="sidebar-mini layout-fixed" style = {{height:"auto"}}>
        <NavBar />

        <Suspense>
          <SideBar {...this.props} router={router} />
        </Suspense>

        <Suspense fallback={this.loading()}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>

        <Footer />
      </div>
    );
  }
}

export default DefaultLayout;
