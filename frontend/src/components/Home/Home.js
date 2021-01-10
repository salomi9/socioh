import React from "react";
import NewPost from "./NewPost/NewPost";
import {Route} from 'react-router-dom'
import Posts from "./Posts/Posts";
class Home extends React.Component {
  render() {
    return (
        <div className="content-wrapper  aside-menu-hidden" style={{minHeight:'876.8px'}}>
        
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            HOME
         </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <NewPost/>
          <Posts/>
      </section>
        {/* /.content */}
        <a id="back-to-top" href="#" className="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
          <i className="fas fa-chevron-up" />
        </a>
      </div>

    );
  }
}

export default Home;
