import React, { Component, Suspense } from 'react';

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import ControlledSide from "./components/ControlledSide/ControlledSide";
import Home from "./components/Home/Home";
import {
  Route,
  Switch,
  BrowserRouter,
  Router,
  HashRouter,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Activity from "./components/Activity/Activity";
import Messages from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  return (
    // <div className="App">
    //   <BrowserRouter>
    //     <NavBar />
    //     <SideBar />

    //     <Switch>
    //       <Route path="/home" exact component={Home} />
    //       <Route path="/activity" component={Activity}/>
    //       <Route path="/messages" component={Messages}/>
    //       <Route path="/profile" component={Profile}/>
    //     </Switch>

    //     <ControlledSide />
    //     <Footer />
    //   </BrowserRouter>
    // </div>
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          {/* <Route
            exact
            path="/home"
            name="Home Page"
            render={(props) => <Home {...props} />}
          />
          <Route
            exact
            path="/activity"
            name="Activity Page"
            render={(props) => <Activity {...props} />}
          />
          <Route
            exact
            path="/messages"
            name="Page message"
            render={(props) => <Messages {...props} />}
          />
          <Route
            exact
            path="/profile"
            name="Page profile"
            render={(props) => <Profile {...props} />}
          /> */}
          <Route
            path="/"
            name="Home"
            render={(props) => <DefaultLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
