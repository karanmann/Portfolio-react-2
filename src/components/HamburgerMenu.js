import React from "react";
import { HamburgerLink, HamburgerContainer, HamburgerToggle } from "../style/NavbarElements";

const HamburgerMenu = () => {
  return (
    <div>
      <HamburgerToggle>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </HamburgerToggle>
      <HamburgerContainer>
        <HamburgerLink to="/" activeStyle>
          HOME
        </HamburgerLink>
        <HamburgerLink to="/intro" activeStyle>
          INTRODUCTION
        </HamburgerLink>
        <HamburgerLink to="/blogs" activeStyle>
          BLOGS
        </HamburgerLink>
        <HamburgerLink to="/projects" activeStyle>
          PROJECTS
        </HamburgerLink>
        <HamburgerLink to="/techandskills" activeStyle>
          Tech & Skills
        </HamburgerLink>
        <HamburgerLink to="/contactme" activeStyle>
          CONTACT ME
        </HamburgerLink>
      </HamburgerContainer>
    </div>
  );
};

export default HamburgerMenu;
