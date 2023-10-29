import styled from "styled-components";

export const StyledMainImg = styled.img`
  width: 500px;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 12px 12px 19px #3d3c3c;
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

export const StyledMainHeader = styled.h1`
  width: 480px;
  color: #2e2525;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 67px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 18px;
`;

export const StyledMainText = styled.p`
color: #676767;
font-family: 'Roboto Condensed', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 25px;
`

export const StyledExploreButton = styled.button`
width: 220px;
height: 55px;
cursor: pointer;
border: none;
color: #ffffff;
font-family: 'Roboto Condensed', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 500;
border-radius: 13px;
box-shadow: 4px 5px 6px 0px #2e2525;
line-height: normal;
background-color: #2a2525;
transition: 0.2s ease;
margin-top: 56px;
&:hover {
  background-color: #454040;
  box-shadow: 4px 5px 6px 0px #454040;
}
&:active {
  background-color: #454040;
  color: #ffffff;
  box-shadow: 4px 5px 6px 0px #454040;
}
` 