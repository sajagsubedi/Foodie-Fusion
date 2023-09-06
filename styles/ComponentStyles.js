"use client";
import styled from "styled-components";

export const RecipeComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  min-width: 270px;
  max-width: 270px;
  height: 300px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 2;
  .recipeImage {
    max-height: 250px;
    overflow: hidden;
  }
  img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
  .recipeBody {
    width: 100%;
    padding: 10px;
  }
  .recipeName {
    color: black;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 1rem;
  }
  .PrimaryBtn {
    padding: 5px;
    border-radius: 5px;
  }
`;
export const RecipeSortMenu = styled.aside`
  position: fixed;
  height: 100%;
  top: 60px;
  right: 0;
  background: rgb(242, 242, 242);
  z-index: 5;
  width: ${(props) => (props.isactive == "true" ? "240px" : "0")};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 0.5s;
  .closeBtnContainer {
    padding: 10px 5px;
    position: relative;
  }
  .SortHead {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .sortHead .sortHeading {
    font-size: 1.2rem;
    text-wrap: nowrap;
  }
  .sortBody {
    padding: 5px 10px 10px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .searchBar {
    display: flex;
    gap: 3px;
  }
  .searchBar input,
  .searchBar button {
    border-radius: 3px;
    height: 30px;
    padding: 3px;
  }
  .actionBtnContainer {
    width: inherit;
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    background: rgb(237, 235, 235);
    position: fixed;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .actionBtnContainer .btn {
    width: 40%;
    margin: 10px;
  }
  .actionBtnContainer .PrimaryBtn:hover {
    background: var(--focusColor) !important;
    color: white;
    border-color: transparent;
  }
  .select-menu {
    width: inherit;
  }
  .select-menu .select-btn {
    display: flex;
    height: 25px;
    background: #fff;
    padding: 1rem;
    font-size: 0.8rem;
    font-weight: 400;
    border-radius: 8px;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    text-wrap: nowrap;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  .select-btn .sBtn-text {
    width: 100%;
  }
  .select-btn svg {
    width: 20%;
    transition: 0.5s;
  }
  .select-menu.active .select-btn svg {
    transform: rotate(180deg);
  }
  .select-menu .options {
    position: relative;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 0px;
    overflow: hidden;
    transition: 0.5s;
  }
  .select-menu.active .options {
    height: 150px;
  }
  .options .option {
    display: flex;
    height: 30px;
    cursor: pointer;
    padding: 0 16px;
    border-radius: 8px;
    align-items: center;
    background: #fff;
    width: 50%;
  }
  .options .option:nth-child(1) {
  }
  .options .option:hover {
    background: #f2f2f2;
  }
  .option .option-text {
    font-size: 0.7rem;
    color: #333;
  }
  .options .option:hover .option-text {
    color: rgba(251, 191, 36, 1);
  }
`;
export const SortToggleBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  border: none;
  padding: 8px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1), 0 0 1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  margin-right: 20px;
  margin-left: 10px;
  background: white;
`;
export const SortToggleContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  z-index: 4;
  top: 65px;
`;

export const RecipePage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 5vh 20px;
  .recipeImage {
    width: 90%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;
export const Instructions = styled.div`
  width: 100%;
  .instructionsBody {
  }
  ol {
    display: flex;
    flex-direction: column;
  }
  ol li {
    list-style-type: decimal;
  }
`;
export const RecipeCarousel = styled.section`
  width: 100%;

  .carrousel {
    padding: 20px;
    display: grid;
    grid-auto-flow: column;
    gap: 1.2rem;
    align-items: center;
    overflow-y: auto;
    overscroll-behavior-x: cover;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }
  .carrousel::-webkit-scrollbar {
    display: none;
  }
  .carrousel > * {
    scroll-snap-align: center;
  }
  .carrousel .btn {
    padding: 8px;
    width: max-content;
  }
  .RecipeCard {
    min-height: 200px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  }
  .RecipeCard .recipeImg img {
    width: 100%;
  }
  .RecipeCard .recipeBody {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }
`;
