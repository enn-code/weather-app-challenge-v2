import React from 'react';
import styled from 'styled-components';
import DesignVariables from '../Styles/DesignVariables';
import { StyledLogo } from '../Styles/CommonComponents';
import Weather from '../Containers/Weather';

const StyledContainer = styled.div`
  background-color: ${DesignVariables.primaryBgColourLight};
  color: ${DesignVariables.primaryFontColour};
`;

const Home = () => (
  <StyledContainer>
    <StyledLogo>
      Weather Toggle App
    </StyledLogo>
    <Weather />
  </StyledContainer>
);

export default Home;
