import styled from "styled-components";
import search_icon from '../../assets/icon/search_icon.svg'

export const StyledInput = styled.input`
border: 1px solid #2e2525;
border-radius: 13px;
width: 530px;
height: 42px;
padding: 10px 20px;
outline: none;
&::placeholder {
    color: #413e3e;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}
&:focus::placeholder {
    opacity: 0;
}
`
export const StyledInputContainer = styled.div`
position: relative;
width: 530px;
`
export const SearchButton = styled.button`
position: absolute;
right: 20px;
top: 50%;
transform: translateY(-50%);
width: 18px;
height: 18px;
border: none;
background-color: white;
background-image: url(${search_icon});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
cursor: pointer;
` 