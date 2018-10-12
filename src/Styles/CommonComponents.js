import styled from 'styled-components';
import CommonVariables from './DesignVariables';

export const StyledPanel = styled.div`
  background-color: rgba(255,255,255,.15);
  box-shadow: 0 4px 7px 0 rgba(0,0,0,0.2);
  padding: 0 30px 45px;
  margin-bottom: 30px;
`;

export const StyledLogo = styled.span`
  display: inline-block;
  padding: 10px;
  color: white;
  border: white 2px solid;
  border-radius: 2px;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  color: ${props => props.selected ? CommonVariables.primaryFontColourDark : CommonVariables.primaryFontColour};
  background: ${props => props.selected ? 'white' : CommonVariables.primaryButtonColour};
  border: 1px solid ${props => props.selected ? CommonVariables.primaryFontColourDark : CommonVariables.primaryFontColour};
  border-radius: 5px;
  :hover {
    color: ${CommonVariables.primaryFontColourDark};
  }
`;
