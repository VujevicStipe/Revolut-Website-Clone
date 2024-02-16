import "./App.css";
import Content from "./components/Content";
import HeaderSection from "./components/sectionComponents/headerSection/HeaderSection";
import HeroSection from "./components/sectionComponents/heroSection/HeroSection";
import CarouselComponent from "./components/carouselComponent/CarouselComponent";
import ProductOverviewSection from "./components/sectionComponents/productOverviewSection/ProductOverviewSection";
import RevpointsSection from "./components/sectionComponents/revpointsSection/RevpointsSection";
import SavingsSection from "./components/sectionComponents/savingsSection/SavingsSection";
import TransferSection from "./components/sectionComponents/transferSection/TransferSection";
import InvestmentSection from "./components/sectionComponents/investmentSection/InvestmentSection";
import MembershipSection from "./components/sectionComponents/membershipSection/MembershipSection";
import PrivacyPolicySection from "./components/sectionComponents/privacyPolicySection/PrivacyPolicySection";
import FooterSection from "./components/sectionComponents/footerSection/FooterSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <HeroSection
        title={Content.hero.heading}
        paragraph={Content.hero.paragraph}
        btnContent={Content.hero.button}
      />
      <ProductOverviewSection
        title={Content.overview1.heading}
        paragraph={Content.overview1.paragraph}
        btnContent={Content.overview1.button}
        btnDesign="primaryBlackBtn"
      >
        <CarouselComponent />
      </ProductOverviewSection>
      <RevpointsSection
        title={Content.revpoints.heading}
        paragraph={Content.revpoints.paragraph}
        btnContent={Content.revpoints.button}
        btnDesign="primaryWhiteBtn"
        backgroundImage="./assets/section2bckg.png"
      >
        <img src="./assets/section2img.png" alt="section2img2" />
      </RevpointsSection>
      <ProductOverviewSection
        title={Content.overview2.heading}
        paragraph={Content.overview2.paragraph}
        btnContent={Content.overview2.button}
        btnDesign="primaryWhiteBtn"
        backgroundColor="black"
      >
        <video autoPlay loop muted playsInline width="640" height="360">
          <source src="../assets/revolut-cards.mp4" type="video/mp4" />
        </video>
      </ProductOverviewSection>
      <ProductOverviewSection
        title={Content.overview2.heading}
        paragraph={Content.overview2.paragraph}
        btnContent={Content.overview2.button}
        btnDesign="primaryWhiteBtn"
        backgroundColor="black"
      >
        <img src="../assets/section3img.png" alt="section3img" />
      </ProductOverviewSection>
      <SavingsSection
        title={Content.savings.heading}
        paragraph={Content.savings.paragraph}
        smParagraph={Content.savings.smParagraph}
        btnContent={Content.savings.button}
        btnDesign="primaryWhiteBtn"
        backgroundColor="./assets/btnActionImg1.png"
        toggle={true}
      />
      <TransferSection btnDesign="primaryBlackBtn" toggle={true} />
      <TransferSection
        title={Content.transfer.heading}
        paragraph={Content.transfer.paragraph}
        btnContent={Content.transfer.button}
        btnDesign="primaryBlackBtn"
        video={Content.transfer.video}
        toggle={false}
      />
      <InvestmentSection btnDesign="primaryBlackBtn" toggle={true} />
      <MembershipSection
        title={Content.membership.heading}
        btnContent={Content.membership.button}
        btnDesign="primaryBlackBtn"
      />
      <PrivacyPolicySection />
      <FooterSection />
    </div>
  );
}

export default App;
