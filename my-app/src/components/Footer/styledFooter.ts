import styled from 'styled-components'

export const StyledP = styled.p`
font-family: 'Roboto Condensed', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const StyledFooter = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 75px 15px 75px;
background-color: rgb(108, 108, 108);
`

export const StyledSocialDiv = styled.div`
display: flex;
width: 203px;
justify-content: space-between;
`

export const StyledSocialIcon = styled.img`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
`
export const StyledSocialIconDiv = styled.div`
position: relative;
background-position: center;
background-size: 100%;
background-repeat: no-repeat;
width: 50px;
height: 55px;
transition: background-image 0.3s ease;
&:hover {
      cursor: pointer;
   }
` 