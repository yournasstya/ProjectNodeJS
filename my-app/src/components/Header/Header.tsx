import React from 'react';
import LogoImg from '../../assets/icon/logo.svg';
import BasketImg from '../../assets/icon/busket.svg'
import FavoriteImg from '../../assets/icon/favorite.svg'
import { StyledHeader, StyledIcon, StyledIconsDiv } from './styledHeader';


const Header = () => {
  return (
    <StyledHeader>
      <img src={LogoImg} alt="logo"/>
      <StyledIconsDiv>
        <StyledIcon src={FavoriteImg} alt="favorite" />
        <StyledIcon src={BasketImg} alt="basket" />
      </StyledIconsDiv>
    </StyledHeader>
  );
}

export default Header;