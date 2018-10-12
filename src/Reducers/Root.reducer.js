import { combineReducers } from 'redux';
import Constants from '../Actions/ActionTypes';

const search = (state = { searchTerm: 'London' }, action) => {
  switch (action.type) {
    case Constants.UPDATE_SEARCH:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    default:
      return state;
  }
};

const weatherData = (state = {}, action) => {
  switch (action.type) {
    case Constants.UPDATE_DATA:
      return {
        ...state,
        weather: action.data,
        isLoading: action.isLoading,
      };
    case Constants.LOADING_DATA:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

const RootReducer = combineReducers({
  weatherData,
  search,
});

export default RootReducer;
