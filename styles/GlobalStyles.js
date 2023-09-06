"use client";
import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
body{
  scroll-behaviour:smooth;
}
:root {
  --focusColor: rgba(251, 191, 36, 1);
  --primaryColor: 243, 244, 246;
  --text-color: black;
}
.btnContainer {
  display: flex;
  gap: 15px;
  margin: 20px;
}
.btn {
  padding: 8px;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.PrimaryBtn {
  background: #fcd34d;
  color: white;
}
.PrimaryBtn:hover {
  background: rgb(var(--primaryColor));
  color: var(--focusColor);
  border: 2px solid #fcd34d;
}
.SecondaryBtn {
  border: 2px solid #fcd34d;
  background: rgb(var(--primaryColor));
  color: var(--focusColor);
}
.SecondaryBtn:hover {
  background: #fcd34d;
  color: white;
}

.PrimaryInput {
  padding: 8px;
  border-radius: 8px;
  background: ;
  border: none;
  outline: none;
}
a{
  text-decoration:none;
}
.Header {
  position: sticky;
  top: 0;
  z-index: 99;
}

.Navbar {
  padding: 10px 7vw;
  height: 60px;
  width: 100%;
  color: var(--text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  gap: 5vw;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
}
.sticky {
  background-color: rgb(243, 244, 246);
}
.Navbar .navFirsthalf {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
}
.logoBx a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: var(--focusColor);
  text-decoration: none;
}
.sticky .logoBx a {
  color: var(--focusColor) !important;
}
.logoBx .logo {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.Navbar .menuToggle {
  width: 50px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.Navbar .menuToggle::before {
  content: "";
  position: absolute;
  width: 32px;
  height: 2px;
  background: white;
  transform: translateY(-10px);
  box-shadow: 0px 10px white;
  transition: 0.5s;
}

.Navbar.active .menuToggle::before {
  content: "";
  transform: translateY(0px) rotate(45deg);
  box-shadow: 0 0 white;
  background: white;
}

.Navbar .menuToggle::after {
  content: "";
  position: absolute;
  width: 32px;
  height: 2px;
  background: white;
  transform: translateY(10px);
  transition: 0.5s;
}

.Navbar.active .menuToggle::after {
  transform: translateY(0px) rotate(-45deg);
  box-shadow: 0 0 white;
  background: white;
}
.sticky .menuToggle::after,
.sticky .menuToggle::before,
.sticky.active .menuToggle::before,
.sticky.active .menuToggle::after {
  background: var(--text-color);
}
.sticky .menuToggle::before {
  box-shadow: 0 10px var(--text-color);
}
.Navbar .menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  gap: 7px;
}

.Navbar .menu li {
  list-style: none;
}

.Navbar .menu li a {
  color: var(--text-color);
  padding: 5px;
  text-decoration: none;
}
.Navbar .menu li a:hover {
  border-bottom: 2px solid white;
  color: white;
}
.Navbar.sticky .menu li a:hover {
  border-bottom: 2px solid rgb(251, 191, 36);
  color: rgba(251, 191, 36, 1) !important;
}
.hero {
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero::after {
  background: rgb(var(--primaryColor));
  content: "";
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: -2;
}
.hero .heroBody {
  display: flex;
  padding: 3vh 0;
  gap: 20px;
}
.heroBody .heroDescriptionHalf {
  width: 50%;
  padding: 10vh 0vw 10vh 5vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.hero .heroDescriptionHalf .heroHeading {
  text-align: center;
}
.heroImgHalf {
  width: 50%;
}
.hero img {
  width: 100%;
}
.hero .searchContainer {
 }
.searchContainer .searchBar{
   display: flex;
  justify-content: center;
  align-items: center;
  border-radius:30px;
  overflow:hidden;
  margin-top:20px;
}
.searchContainer .PrimaryInput{
  margin:0px;
  border-radius:0px;
  height:100%;
}
.searchContainer .searchBtn {
  background:#fcd34d;
  padding: 5px;
  color:white;
  margin:0px;
  border-radius:0;
  font-weight:bold;
}
.wave {
  width: 100vw;
  fill: rgb(var(--primaryColor));
}
.colouredBox {
  background: var(--focusColor);
  position: absolute;
  height: 100vh;
  width: 55vw;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: -2;
  border-radius: 50% 0 20px 90%;
}
.footer {
  background: rgb(var(--primaryColor));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2vh 10vw;
  gap: 2vh;
}
.footer .topHalf {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  width: 100%;
  margin-bottom: 10px;
}
.footer .logoBx {
  width: 40%;
}
.footer .footerText {
  text-align: center;
  color: #3c3e41 !important;
}
.footer .categories {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.footer .categories .h5 {
  font-size: 1.4rem;
}
.footer .categories li {
  list-style: none;
  font-size: 1rem;
}
.footer .categories li a {
  text-decoration: none;
  color: #3c3e41;
  font-size: 0.9rem;
}
.footer .copyrightText {
  display: flex;
  text-align: center;
}
.sectionDivider {
  width: 60px;
  height: 4px;
  background: var(--focusColor);
  border-radius: 5px;
  margin: 5px;
}
.sectionHeading {
  color: var(--focusColor);
  font-size: 1.7rem;
  margin: 5px;
  text-align: center;
}
.spinner{
    display:flex;
    justify-content:center;
    align-items:center;
}
.spinner img{
    height:50px;
}
@media (max-width: 690px) {
  .Navbar {
    justify-content: start;
    align-items: flex-end;
    flex-direction: column;
    padding: 0;
    gap: 0;
    overflow: visible;
    background: var(--focusColor);
  }
  .sticky {
    background: rgb(var(--primaryColor));
  }
  .Navbar .navFirsthalf {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 60px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
  .Navbar .logoBx a {
    color: white !important;
  }
  .Navbar.sticky .logoBx a {
    color: var(--focusColor) !important;
  }
  .Navbar .menuToggle {
    display: flex;
  }

  .Navbar .menu {
    flex-direction: column;
    align-items: center;
    height: 0vh;
    width: 50vw;
    top: 60px;
    position: absolute;
    z-index: -1;
    background: #fcd34d;
    overflow: hidden;
    transition: height 0.5s;
    transition-delay: 0s;
    border-radius: 15px;
    margin-right: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  }
  .sticky .menu {
    background: rgb(var(--primaryColor));
  }
  .Navbar.active .menu {
    height: 40vh;
  }
  .hero {
    background: var(--focusColor);
  }
  .hero .heroBody {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0;
  }
  .heroBody .heroDescriptionHalf {
    width: 100%;
    padding: 0 5vw;
    justify-content: center;
  }
  .hero .heroDescriptionHalf .heroHeading {
    color: white;
  }
  .hero .heroDescriptionHalf .heroPara {
    text-align: center;
    color: black;
  }
  .heroBody .heroImgHalf {
    width: 100%;
  }
  .colouredBox {
    display: none;
  }
  .wave {
    fill: var(--focusColor);
  }
  .footer .topHalf {
    flex-direction: column;
  }
  .footer .logoBx {
    width: 100%;
  }
  .footer .categories {
    width: 100%;
  }
}

.Contact {
  padding: 5vh 5vw;
  display: flex;
  flex-direction: column;
}
.contactForm {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 2vh 5vw;
}
.contactForm input,
.contactForm textarea {
  border-radius: 6px;
  background: rgb(var(--primaryColor));
}
.contactForm textarea {
  color: black;
  padding: 18px auto;
}
.contactForm .PrimaryBtn {
  border-radius: 6px;
}
.recipeGroup {
  display: flex;
  margin: 20px;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
`;
