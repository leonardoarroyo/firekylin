import 'babel-core/polyfill'

import React from 'react';
import Router, {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from './components/App';
import UserPage from './components/UserPage';
import PostPage from './components/PostPage';
import LoginPage from './components/LoginPage';
import ConfigPage from './components/ConfigPage';
import PostEditPage from './components/PostEditPage';
import CategoryPage from './components/CategoryPage';
import DashBoardPage from './components/DashBoardPage';

import './stores/WebAPIStores';


let routes = (
  <Route path="/admin" handler={App}>
    <DefaultRoute name="dashboard" handler={ DashBoardPage } />
    <Route name="category" path="category" handler={ CategoryPage } />
    <Route name="post" path="post">
      <DefaultRoute handler={ PostPage} />
      <Route name="post/add" path="add" handler={ PostEditPage } />
      <Route name="post/edit" path="edit/:id" handler={ PostEditPage } />
    </Route>
    <Route name="user" path="user" handler={ UserPage } />
    <Route name="config" path="config" handler={ ConfigPage } />
    <Route name="login" path="login" handler={ LoginPage } />
    <NotFoundRoute handler={ DashBoardPage }/>
  </Route>
);

new Promise(resolve => {
  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', resolve);
  } else {
    window.attachEvent('onload', resolve);
  }
}).then(() => {
  Router.run(routes, Router.HistoryLocation, Root => {
    React.render(<Root />, document.body);
  });
});