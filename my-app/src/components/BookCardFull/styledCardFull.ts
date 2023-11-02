import styled from "styled-components";

export const StyledBookPageDiv = styled.div`
display: flex;
justify-content: space-around;
margin-top: 180px;
`

export const StyledCardDescriptionWrapper = styled.div`
display: flex;
flex-direction: column;
width: 526px;
`

export const StyledCardFullTitle = styled.div`
color: #3D3C3C;
font-family: 'Roboto Condensed', sans-serif;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const StyledAuthorDiv = styled.div`
margin-top: 15px;
width: 526px;
min-height: 66px;
border-radius: 20px;
background:  #FFF;
box-shadow: 12px 12px 19px #3d3c3c;
color:  #676767;
font-family: 'Roboto Condensed', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 300;
line-height: normal;
padding: 25px 30px;
`
export const StyledBookImg = styled.img`
width: 280px;
height: 417px;
`

export const StyledPriceBook = styled.p`
color: blue;
font-family: 'Roboto Condensed', sans-serif;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 65px;
margin-bottom: 15px;
`

export const StyledBuyButton = styled.button<{$buy?:boolean;}>`
cursor: pointer;
margin-top: 10px;
width: 255px;
height: 46px;
border-radius: 12px;
border: none;
box-shadow: 4px 5px 6px 0px #454040;
background-color: ${props => props.$buy ? "#876565" : "#878989"};
color: black;
font-family: 'Roboto Condensed', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: normal;
` 

export const StyledSimpleDiv = styled.img`
margin-top: -4px`