import {BrowserRouter, Switch, Route} from "react-router-dom";

import React from 'react';
import Header from "./Header";
import Blog from "./Blog";
import BlogDetail from './BlogDetail';

//install bootstrap dulu
import 'bootstrap/dist/css/bootstrap.min.css';

// Ini merupakan functional component
// https://getbootstrap.com/docs/4.4/examples/navbar-static/

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/about">
            About
          </Route>
          <Route exact path="/blog/:articleId" component={BlogDetail} />
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/">
            Home
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;