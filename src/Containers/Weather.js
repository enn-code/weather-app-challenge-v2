import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../Actions/WeatherActions';
import { RenderBasicList, RenderBasicTable } from '../Components/WeatherComponents';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
    };
  }

  componentWillMount() {
    console.log('componentWillMount Weather Container', this.props);
    fetchWeatherData();
  }

  componentWillReceiveProps() {

  }

  generateWeatherDataList(list) {
    // Make component
    return list.map((item, i) => {
      return (
        <p key={i}>
          {RenderBasicList(item)}
        </p>
      )
    });
  }

  render() {
    const { isLoading, dataError, weather } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (dataError) {
      return <p>Something went wrong, please refresh or try again</p>;
    }

    return (
      <div>
        {weather.list && (
          <div>
            <ul>
              {this.generateWeatherDataList(weather.list)}
            </ul>
            {RenderBasicTable(weather.list)}
          </div>
        )}
      </div>
    );
  }
}

Weather.propTypes = {
  isLoading: PropTypes.bool,
  dataError: PropTypes.string,
  weather: PropTypes.object,
};

const mapStateToProps = state => ({
  weather: state.weatherData,
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: x => dispatch(fetchWeatherData(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
