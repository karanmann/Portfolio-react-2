import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  box-shadow: 0px 0px 20px 5px rgba(50,38,89,1);
  height: 5%;
`;

export const Nav = styled.nav`
  background: #322659;
  color: #f4f4f4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem
`;

export const NavigationLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`;

export const NavigationLink = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  color: #f4f4f4;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    font-weight: 600;
    transition: 0.2s linear;
    line-height: .5rem;
  }
  
`;

export const ThemeToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
`;

export const ThemeToggleButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #faf5ff;
  border-radius: 50%;
  border: 0;
`;

// @media only screen and (max-width: 768px) {
  

// }