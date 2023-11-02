import styled from "styled-components";
import favorite_img from '../../assets/icon/favorite.svg'
import basket_img from '../../assets/icon/busket.svg'

export const StyledBookWrapper = styled.div`
width: 200px;
display: flex;
flex-direction: column;
`
export const StyledSimpleDiv = styled.div`
display: flex;
justify-content: space-between;
`
export const StyledPriceDiv = styled.div`
display: inline-block;
height: 46px;
border-radius: 20px;
color:  #3D3C3C;
text-align: center;
font-family: 'Roboto Condensed', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding: 5px;
`

export const StyledFavoriteBtn = styled.button`
width: 57px;
height: 46px;
border-radius: 23px;
border: 2px solid #3D3C3C;
background-image: url(${favorite_img});
background-position: center;
background-repeat: no-repeat;
background-color: white;
&:hover {
  cursor: pointer;
}
`

export const StyledBasketBtn = styled.button`
width: 200px;
height: 46px;
border-radius: 12px;
border: none;
background-color: #876565;
background-image: url(${basket_img});
background-repeat: no-repeat;
background-position: center;
margin-top: 10px;
box-shadow: 12px 12px 19px #3d3c3c;
&:hover {
  cursor: pointer;
}
` 