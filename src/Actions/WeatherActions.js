import {openWeatherMapKey} from '../Config/config';
import Constants from './ActionTypes';

export const fetchWeatherData = (dispatch, params) => {

  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=London&mode=json';

  return fetch(`${url}&APPID=${openWeatherMapKey}`).then((response) => {
    console.log(response);
    return response.json();
  }).then((myJson) => {
    console.log(myJson);
    dispatch({
      type: Constants.UPDATE_DATA,
      data: myJson
    })
  });
}




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