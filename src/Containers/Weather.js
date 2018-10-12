import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledButton } from '../Styles/CommonComponents';
import { fetchWeatherData, updatePrettyPreference } from '../Actions/WeatherActions';
import { RenderBasicList, RenderBasicTable, RenderPrettyTable } from '../Components/WeatherComponents';

const StyledWeatherContainer = styled.div`
  margin: 5px;
  text-align: center;
`;

const StyledWeatherControls = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

const StyledLocation = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 5px;
`

class Weather extends Component {
  componentWillMount() {
    this.props.fetchWeatherData();
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props);
  }

  toggleDataCall = (params) => {

  };

  toggleRenderPretty = (isPretty) => {
    this.props.updatePrettyPreference(isPretty);
  }

  generateWeatherDataList = (list) => {
    if (this.props.search.isRenderPrettyTable) {
      return list.map((item, i) => (
        <p key={i}>
          lolol
          {RenderBasicList(item)}
        </p>
      ));
    }
    return list.map((item, i) => (
      <p key={i}>
        lolol
        {RenderBasicList(item)}
      </p>
    ));
  };

  renderTable = (list) => {
    if (this.props.search.isRenderPrettyTable) {
      return RenderPrettyTable(list);
    }
    return RenderBasicTable(list);
  }


  render() {
    const {
      isLoading,
      dataError,
      weather,
      search,
    } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (dataError) {
      return <p>Something went wrong, please refresh or try again</p>;
    }

    return (
      <StyledWeatherContainer>
        <StyledWeatherControls>
          <p>
            A weather app that renders data into a simple table.
          </p>
          Controls:&nbsp;
          <StyledButton
            displayId='simpleSwitch'
            selected={!search.isRenderPrettyTable}
            onClick={() => this.toggleRenderPretty(false)}
          >
            Simple
          </StyledButton>
          <StyledButton
            displayId='prettySwitch'
            selected={search.isRenderPrettyTable}
            onClick={() => this.toggleRenderPretty(true)}
          >
            Pretty
          </StyledButton>
        </StyledWeatherControls>
        {weather.list && (
          <div>
            <StyledLocation>
              Location: {search.searchTerm}
            </StyledLocation>
            {this.renderTable(weather.list)}
            <ul>
              {/* {this.generateWeatherDataList(weather.list)} */}
            </ul>
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
  search: PropTypes.object,
};

const mapStateToProps = state => ({
  weather: state.weatherData.weather,
  isLoading: state.weatherData.isLoading,
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: x => dispatch(fetchWeatherData(x)),
  updatePrettyPreference: x => dispatch(updatePrettyPreference(x)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Weather);
