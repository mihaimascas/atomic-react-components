import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router';

//Containers
import App from './containers/App'

// Pages
import HomePage from './pages/Home';
import GridPage from './pages/Grid';
import ButtonPage from './pages/Button';

// Styles
import styles from './styles/style.scss';

// Routes. Mentain manually
ReactDOM.render(
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="home" component={HomePage} />
      <Route path="grid" component={GridPage} />
      <Route path="button" component={ButtonPage} />
      <Route path="*" component={HomePage} />
    </Route>
  </Router>,
  document.getElementById('app')
);