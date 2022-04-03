import React from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import {
  NavBar,
  Nav,
  NavigationLink,
  NavigationLinkContainer,
  ThemeToggleButton,
  ThemeToggleContainer,
} from "../style/NavbarElements";

const Navbar = ({ themeToggler, theme }) => {
  return (
    <NavBar>
      <Nav>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <NavigationLinkContainer>
          <NavigationLink to="/" activeStyle>
            HOME
          </NavigationLink>
          <NavigationLink to="/blogs" activeStyle>
            BLOGS
          </NavigationLink>
          <NavigationLink to="/projects" activeStyle>
            PROJECTS
          </NavigationLink>
          <NavigationLink to="/techandskills" activeStyle>
            TECH & SKILLS
          </NavigationLink>
          <NavigationLink to="/contactme" activeStyle>
            CONTACT ME
          </NavigationLink>
        </NavigationLinkContainer>
        <ThemeToggleContainer>
          <ThemeToggleButton onClick={themeToggler}>
            {theme === "light" ? <FaRegSun /> : <FaRegMoon />}
          </ThemeToggleButton>
        </ThemeToggleContainer>
      </Nav>
    </NavBar>
  );
};

export default Navbar;
