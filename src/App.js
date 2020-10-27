import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import MovieDetailPage from './Pages/MovieDetailPage';
import PageNotFound from './Pages/PageNotFound';
import SearchResultPage from './Pages/SearchResultPage';
import globalStore from './Store/GlobalStore';

const store = globalStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/movie/:id' exact component={MovieDetailPage} />
          <Route
              path='/search/result/:id'
              exact
              component={SearchResultPage}
            />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
