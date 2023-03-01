import {
  NavbarButton,
  NavbarContainer,
  NavbarIcon,
  NavbarIcons,
  NavbarLinks,
  NavbarList,
  NavbarListItem,
  NavbarLogo,
  NavbarNav,
} from "../Styled/Styled";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";



function Navbar() {
  return (
    <NavbarContainer>
      <NavbarNav>
        <NavbarLinks>
          <NavbarLogo src={logo} />
          <NavbarList>
            <NavbarListItem>Home</NavbarListItem>
            <NavbarListItem>Studio</NavbarListItem>
            <NavbarListItem>Works</NavbarListItem>
            <NavbarListItem>Contact</NavbarListItem>
          </NavbarList>
        </NavbarLinks>
        <NavbarIcons>
          <NavbarIcon>
            <FaSearch color="white" size="20px" />
          </NavbarIcon>
          <NavbarButton>Add product</NavbarButton>
        </NavbarIcons>
      </NavbarNav>
    </NavbarContainer>
  );
}

export default Navbar;
