import React from "react";
import main_img from "../../../assets/images/main_img.jpg";
//import folder_img from "../../../assets/icon/folder.svg";
//import path_img from "../../../assets/icon/path.svg";
import book_cover from "../../../assets/images/book_cover.jpg";
import Input from "../../Input/Input";
import {
  StyledExploreButton,
  StyledMainHeader,
  StyledMainImg,
  StyledMainText,
  StyledMainWrapper,
} from "./styledMainPages";
import SectionHeader from "../../SectionHeader/SectionHeader";
//import Button from "../../Button/Button";
import BookCard from "../../BookCard/BookCard";
import { StyledSimpleDiv } from "../../BookCard/styledBook.Card";

/*const handleClick = () => {
  alert("click");
};
*/
export const templateArray = [
  {
    image: book_cover,
    title: "About this",
    price: 31.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "About this",
    price: 31.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "About this",
    price: 31.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "About this",
    price: 31.,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "About this",
    price: 31.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
];

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
      <SectionHeader headerName="New releases books" />
      <StyledSimpleDiv>
        {Array.isArray(templateArray) && templateArray.map(({image, price}) => (
          <BookCard key={image} imageSrc={image} price={price}/>
        ))}
      </StyledSimpleDiv>
    </>
  )
}

/*
        <SectionHeader headerName="Categories" imageSrc={folder_img} />
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Romance" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
 */

export default MainPage