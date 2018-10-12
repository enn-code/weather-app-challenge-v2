import React from 'react';
import styled from 'styled-components';
import DesignVariables from '../Styles/DesignVariables';
import { StyledLogo } from '../Styles/CommonComponents';
import Weather from '../Containers/Weather';

const StyledContainer = styled.div`
  background: linear-gradient(${DesignVariables.primaryBgColourDark}, ${DesignVariables.primaryBgColourLight});
  background-color: ${DesignVariables.primaryBgColourLight};
  color: ${DesignVariables.primaryFontColour};
`;

const StyledLogoContainer = styled(StyledLogo)`
  margin: 10px;
`;

const Home = () => (
  <StyledContainer>
    <StyledLogoContainer>
      Weather Toggle App
    </StyledLogoContainer>
    <Weather />
  </StyledContainer>
);

export default Home;
