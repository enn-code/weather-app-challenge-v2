import React from 'react';
import * as actions from '../Actions/WeatherActions';
import Constants from '../Actions/ActionTypes';

describe('Weather actions', () => {
  it('should create an action to update pretty display preferences', () => {
    const isPretty = false;
    const expectedAction = {
      type: Constants.UPDATE_SEARCH_PRETTY,
      isRenderPrettyTable: isPretty,
    };
    expect(actions.updatePrettyPreference(isPretty)).toEqual(expectedAction);
  });

  it('fetchWeatherData --- should dispatch loading state true action', () => {
    expect(actions.fetchWeatherData()).toEqual()
  });

  it('fetchWeatherData --- should update weather data in store', () => {

  });

  it('fetchWeatherData --- should set loading state to false', () => {

  });
});
