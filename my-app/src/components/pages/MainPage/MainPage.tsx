import React from 'react'
import main_img from '../../../assets/images/main_img.jpg'
import Input from '../../Input/Input'
import { StyledExploreButton, StyledMainHeader, StyledMainImg, StyledMainText, StyledMainWrapper } from '../MainPage/styledMainPages'

const MainPage = () => {
  return (
    <>
        <StyledMainWrapper>
            <StyledMainImg src={main_img} alt="main_img" />
            <div>
                <StyledMainHeader>Buy and sell your textbooks for the best price!</StyledMainHeader>
                <StyledMainText>Explore our catalog, buy and sell with confidence today.</StyledMainText>
                <Input/>
                <StyledExploreButton><span>SEARCH</span></StyledExploreButton>
             </div>
        </StyledMainWrapper>
    </>
  )
}

export default MainPage