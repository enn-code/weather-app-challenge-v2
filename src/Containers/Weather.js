import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledButton } from '../Styles/CommonComponents';
import fetchWeatherData from '../Actions/WeatherActions';
import { RenderBasicList, RenderBasicTable } from '../Components/WeatherComponents';

const StyledWeatherContainer = styled.div`
  margin: 5px;
`;


const generateWeatherDataList = (list) => {
  list.map((item, i) => (
    <p key={i}>
      lolol
      {RenderBasicList(item)}
    </p>
  ));
};

class Weather extends Component {
  componentWillMount() {
    fetchWeatherData();
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props);
  }

  toggleDataCall = (params) => {

  };

  toggleRenderMethod = (option) => {

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
      <StyledWeatherContainer>
        <div>
          Controls:
          <StyledButton selected={true}>Simple</StyledButton>
          <StyledButton selected={false}>Pretty</StyledButton>
        </div>
        {weather.list && (
          <div>
            <ul>
              {generateWeatherDataList(weather.list)}
            </ul>
            {RenderBasicTable(weather.list)}
          </div>
        )}
      </StyledWeatherContainer>
    );
  }
}

Weather.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  dataError: PropTypes.string,
  weather: PropTypes.object,
};

const mapStateToProps = state => ({
  weather: state.weatherData.weather,
  isLoading: state.weatherData.isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: dispatch(fetchWeatherData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
