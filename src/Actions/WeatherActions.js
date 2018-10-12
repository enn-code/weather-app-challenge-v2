import { openWeatherMapKey } from '../Config/config';
import Constants from './ActionTypes';

const fetchWeatherData = params => (dispatch) => {
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

export default fetchWeatherData;


// export const fetchWeatherData = (params) => {
//   fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${openWeatherMapKey}`)
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });
// }
