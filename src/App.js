import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import RootReducer from './Reducers/Root.reducer';
import InitialState from './Reducers/InitialState';
import Home from './Views/Home';

// Add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Apply thunk
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

// Apply thunk middleware to store with Redux devtools
const store = createStore(
  RootReducer,
  InitialState,
  enhancer,
);

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
