import { Section , HeroSection, HeroLeft, HeroRight, HeroTitle, HereWhat, HeroLine, HeroSubtitle, HeroDesc, NavbarButton} from "../Styled/Styled";
import Navbar from "./Navbar";
import hero from "../assets/3.png"
function Hero() {
  return (
    <Section>
      <Navbar></Navbar>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>Think. Make. Solve.</HeroTitle>
          <HereWhat>
            <HeroLine></HeroLine>
            <HeroSubtitle>What We Do</HeroSubtitle>
            <HeroDesc>
              we rnjoy creting delightful,h human-centered digital experiences.
            </HeroDesc>
            <NavbarButton>Learn more</NavbarButton>
          </HereWhat>
        </HeroLeft>
        <HeroRight>
          <img style={{width : '300px' , height : '300px' ,objectFit: 'cover' ,borderRadius : '10px'}} src={hero} alt="Hero image" />
        </HeroRight>
      </HeroSection>
    </Section>
  );
}

export default Hero;
