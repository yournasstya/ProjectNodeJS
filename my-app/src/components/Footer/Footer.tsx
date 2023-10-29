import React from 'react'
import { StyledFooter, StyledP, StyledSocialDiv, StyledSocialIcon, StyledSocialIconDiv } from './styledFooter';
import linkedin from '../../assets/icon/LinkedinLogo.svg'
import facebook from '../../assets/icon/FacebookLogo.svg'
import twitter from '../../assets/icon/TwitterLogo.svg'

const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>BookStore NodeJSProject</StyledP>
        <StyledSocialDiv>
          <StyledSocialIconDiv>
            <StyledSocialIcon src={linkedin} alt="app"/>
          </StyledSocialIconDiv>
          <StyledSocialIconDiv>
            <StyledSocialIcon src={facebook} alt="app"/>
          </StyledSocialIconDiv>
          <StyledSocialIconDiv>
            <StyledSocialIcon src={twitter} alt="app"/>
          </StyledSocialIconDiv>
        </StyledSocialDiv>
      <StyledP>by Nastassia Grekova</StyledP>
    </StyledFooter>
  )
}

export default Footer