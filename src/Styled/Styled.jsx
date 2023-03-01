import styled from "styled-components";

export const Container = styled.div`
  scroll-snap-type: mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #fff;
  background-color: rgba(85, 6, 176, 0.5);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Section = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: center;
  justify-content: space-between;
  flex-direction:column;
  align-items:center;
`;
export const HeroSection = styled.div`
  height: 100vh;
    width:1100px;
    display: flex;
    justify-content:space-between;
  scroll-snap-align: center;
`;
export const HeroRight = styled.div`
  flex: 3;
`;
export const HeroLine = styled.div``;
export const HeroSubtitle = styled.div``;
export const HeroTitle = styled.div`
  font-size:74px;
`;
export const HereWhat = styled.div``;
export const HeroLeft = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;
export const HeroDesc = styled.div``;
export const WhoSection = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;
export const ContactSection = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;

export const WorkSection = styled.div`
  height: 100vh;

  scroll-snap-align: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
`;
export const NavbarNav = styled.div`
  width: 1100px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
export const NavbarLinks = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
`;

export const NavbarIcons = styled.div`
  display: flex;
`;
export const NavbarLogo = styled.img``;
export const NavbarList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
`;
export const NavbarListItem = styled.li`
  cursor: pointer;
`;
export const NavbarButton = styled.button`
  color: #fff;
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  border: #da4ea2;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 5px;
`;
export const NavbarIcon = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  background: inherit;
  border: none;
`;
