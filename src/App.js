import React, { Component } from 'react';
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
        <Home />
      </Provider>
    );
  }
}

export default App;
