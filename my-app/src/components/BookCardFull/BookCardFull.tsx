import React, { FC } from 'react'
import BookCard, { IBook } from '../BookCard/BookCard'
import basket from '../../assets/icon/busket.svg'
import SectionHeader from '../SectionHeader/SectionHeader'
//import path_img from "../../assets/icon/path.svg";
import { StyledFavoriteBtn, StyledSimpleDiv } from '../BookCard/styledBook.Card' //nie dodalalm tu StyledBasketBtn bo bylo na zolto
import { StyledAuthorDiv, StyledBookImg, StyledBookPageDiv, StyledBuyButton, StyledCardDescriptionWrapper, StyledCardFullTitle, StyledPriceBook } from './styledCardFull'
import { templateArray } from '../pages/MainPage/MainPage';


const BookCardFull: FC<IBook> = ({title, imageSrc,price,author,description,isFavorite}) => {
  return (
    <>
    <StyledBookPageDiv>
      <StyledBookImg src={imageSrc} alt="book_img" />
      <StyledCardDescriptionWrapper>
      <StyledSimpleDiv>
        <StyledCardFullTitle>{title}</StyledCardFullTitle>
        <StyledFavoriteBtn type="button"></StyledFavoriteBtn>
      </StyledSimpleDiv>
      <StyledAuthorDiv>Author(a):{author}</StyledAuthorDiv>
      <StyledAuthorDiv>{description}</StyledAuthorDiv>
      <StyledSimpleDiv>
        <StyledPriceBook>${price}.38</StyledPriceBook>
      </StyledSimpleDiv>
      <StyledSimpleDiv>
        <StyledBuyButton><img src={basket} alt="" /></StyledBuyButton>
        <StyledBuyButton $buy>Buy Now</StyledBuyButton>
      </StyledSimpleDiv>
      </StyledCardDescriptionWrapper>
    </StyledBookPageDiv>
    <SectionHeader headerName="View More" />
    <StyledSimpleDiv>
        {Array.isArray(templateArray) && templateArray.map(({image, price}) => (
          <BookCard key={image} imageSrc={image} price={price}/>
        ))}
      </StyledSimpleDiv>
    </>
  )
}

export default BookCardFull