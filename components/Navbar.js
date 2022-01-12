import React, { useState } from "react";
///* */ styled code goes here
import {
  NavContainer,
  RightContainer,
  LeftContainer,
  ExtendedContainer,
  NavInnerContainer,
  NavLinkContainer,
  NavLinkStyle,
  Logo,
  OpenLinksButton,
  NavLinkStyleExtended
} from "./Navbar.styled";
//*/ styled code ends here
import NavLogo from "../assets/Images/Logos/Swiggy-2.png";
const Navbar = () => {
  const [extendNav, setExtendNav] = useState(false);
  const toggleDrawer = (preState) => {
    setExtendNav((preState = !extendNav));
  };
  return (
    <NavContainer extendNav={extendNav}>
      <NavInnerContainer>
        <LeftContainer>
          <NavLinkContainer>
            <NavLinkStyle>Home</NavLinkStyle>
            <NavLinkStyle>Products</NavLinkStyle>
            <NavLinkStyle>Services</NavLinkStyle>
            <NavLinkStyle>Contacts</NavLinkStyle>
            <NavLinkStyle>About</NavLinkStyle>
            <OpenLinksButton
              onClick={toggleDrawer}
            >
              {extendNav ? "Clicked Me" : "CLick Me"}
            </OpenLinksButton>
          </NavLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo src={NavLogo}></Logo>
        </RightContainer>
      </NavInnerContainer>
      <ExtendedContainer>
        {extendNav && (
          <>
            <NavLinkStyleExtended>Home</NavLinkStyleExtended>
            <NavLinkStyleExtended>Products</NavLinkStyleExtended>
            <NavLinkStyleExtended>Services</NavLinkStyleExtended>
            <NavLinkStyleExtended>Contacts</NavLinkStyleExtended>
            <NavLinkStyleExtended>About</NavLinkStyleExtended>
          </>
        )}
      </ExtendedContainer>
    </NavContainer>
  );
};

export default Navbar;
