import { combineReducers } from 'redux';
import Constants from '../Actions/ActionTypes';

const search = (state = { searchTerm: 'London' }, action) => {
  switch (action.type) {
    case Constants.UPDATE_SEARCH:
      return {
        searchTerm: action.searchTerm
      }
    default:
      return state
  }
};


const weatherData = (state = {}, action) => {
  switch (action.type) {
    case Constants.UPDATE_DATA:
      return action.data;
    default:
      return 'none'
  }
}

const RootReducer = combineReducers({
  weatherData,
  search
});

export default RootReducer;