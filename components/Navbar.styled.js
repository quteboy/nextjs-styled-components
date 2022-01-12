import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.extendNav ? "100vh" : "75px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    height: 76px;
  }
`;
export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  
`;
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
 
  padding-right: 50px;
`;
export const ExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const NavInnerContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
`;
export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NavLinkStyle = styled.a`
  text-decoration: none;
  color: wheat;
  font-size: large;
  font-weight: 400;
  margin: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavLinkStyleExtended = styled.a`
  text-decoration: none;
  color: wheat;
  font-size: large;
  font-weight: 400;
  margin: 7px;
`;
export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;
export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
