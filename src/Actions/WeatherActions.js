import { openWeatherMapKey } from '../Config/config';
import Constants from './ActionTypes';

export const fetchWeatherData = params => (dispatch) => {
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json';
  dispatch({
    type: Constants.LOADING_DATA,
    isLoading: true,
  });
  return fetch(`${url}&APPID=${openWeatherMapKey}`)
    .then(response => response.json())
    .then((myJson) => {
      dispatch({
        type: Constants.UPDATE_DATA,
        isLoading: false,
        data: myJson,
      });
    });
};

export const updatePrettyPreference = isPretty => (dispatch) => {
  return dispatch({
    type: Constants.UPDATE_SEARCH_PRETTY,
    isRenderPrettyTable: isPretty,
  });
};
