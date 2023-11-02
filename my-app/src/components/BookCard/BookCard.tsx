import React, { FC } from "react";
//import basket from "../../assets/icon/busket.svg";
//import favorite from "../../assets/icon/favorite.svg";
import { StyledBasketBtn, StyledBookWrapper, StyledFavoriteBtn, StyledPriceDiv, StyledSimpleDiv } from "./styledBook.Card";


export interface IBook {
    title?: string,
    imageSrc: string;
    price: number;
    description?: string,
    author?: string,
    isFavorite?: boolean
}
const BookCard: FC<IBook> = ({ imageSrc, price }) => {
  return (
    <StyledBookWrapper>
      <img src={imageSrc} alt="img" />
      <StyledSimpleDiv>
        <StyledPriceDiv>{price}.31$</StyledPriceDiv>
        <StyledFavoriteBtn type="button"></StyledFavoriteBtn>
      </StyledSimpleDiv>
      <StyledBasketBtn/>
    </StyledBookWrapper>
  );
};
export default BookCard;