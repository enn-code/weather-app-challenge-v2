import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledButton } from '../Styles/CommonComponents';

const StyledWeatherControls = styled.div`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

const WeatherControls = (props) => {
  const { search, toggleRenderPretty } = props;
  console.log(props);
  return (
    <StyledWeatherControls>
      <p>
        A weather app that renders data into a simple table.
      </p>
      Controls:&nbsp;
      <StyledButton
        displayId='simpleSwitch'
        selected={!search.isRenderPrettyTable}
        onClick={() => toggleRenderPretty(false)}
      >
        Simple
      </StyledButton>
      <StyledButton
        displayId='prettySwitch'
        selected={search.isRenderPrettyTable}
        onClick={() => toggleRenderPretty(true)}
      >
        Pretty
      </StyledButton>
    </StyledWeatherControls>
  );
};

WeatherControls.propTypes = {
  search: PropTypes.shape({
    isRenderPrettyTable: PropTypes.bool,
  }).isRequired,
  toggleRenderPretty: PropTypes.func.isRequired,
};

export default WeatherControls;
