import React from 'react';
const Home = React.lazy(() => import('./components/Home/Home'));
const Activity = React.lazy(() => import('./components/Activity/Activity'));
const Messages = React.lazy(() => import('./components/Messages/Messages'));
const Profile = React.lazy(() => import('./components/Profile/Profile'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config 

const routes = [ 
      //{ path: '/', exact: true, name: 'Home' },   
      { path: '/home', name: 'Home', component: Home },
      { path: '/activity', name: 'Home', component: Activity },
      { path: '/messages', name: 'Home', component: Messages },
      { path: '/profile', name: 'Home', component: Profile },



       ]; 
       
export default routes;