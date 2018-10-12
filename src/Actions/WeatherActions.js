import { openWeatherMapKey } from '../Config/config';
import Constants from './ActionTypes';

export const fetchWeatherData = params => (dispatch) => {
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json';
  dispatch({
    type: Constants.LOADING_DATA,
    isLoading: true
  });
  console.log('fetchWeatherData', dispatch, params);
  return fetch(`${url}&APPID=${openWeatherMapKey}`)
    .then(response => response.json())
    .then((myJson) => {
      console.log('data received', myJson);
      dispatch({
        type: Constants.UPDATE_DATA,
        isLoading: false,
        data: myJson,
      });
    });
};

export const updatePrettyPreference = isPretty => (dispatch) => {
  console.log('WeatherActions', isPretty);
  return dispatch({
    type: Constants.UPDATE_SEARCH_PRETTY,
    isRenderPrettyTable: isPretty,
  });
};
