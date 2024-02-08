import "./App.css";
import HeaderComponent from "./components/headerComponent/HeaderComponent";
import HeroSection from "./components/heroSection/HeroSection";
import CarouselComponent from "./components/carouselComponent/CarouselComponent";
import VerticalHomeSection from "./components/verticalHomeSection/VerticalHomeSection";
import HorizontalHomeSection from "./components/horizontalHomeSection/HorizontalHomeSection";
import SavingsSection from "./components/savingsSection/SavingsSection";
import TransferSection from "./components/transferSection/TransferSection";
import InvestmentSection from "./components/investmentSection/InvestmentSection";

//hero section content
let heroH = "REVOLUCIONARNO BANKARSTVO";
let heroP =
  "Za one koji žele više od svog novca – tu je Revolut. Registrirajte se besplatno, jednim dodirom.";
let heroB = "Preuzmite Aplikaciju";

//section1 content
let sec1H = "DOBRO POTROSEN NOVAC";
let sec1P =
  "Kupujete namirnice? Zaradite RevPoints. Lutate ulicama Japana? Plaćajte u jenima. Velika životna promjena? Isprobajte zajednički račun. Neovisno o potrošnji – Revolut je sve što trebate.";
let set1B = "Početak";

//section2 content
let sec2H = "SPAKIRAJTE SVOJE REVPOINTS I KRENITE NA PUT";
let sec2P =
  "Sada vaša dnevna potrošnja može biti puno isplativija. Ostvarite RevPoints svaki dan i upotrijebite ih na sljedećem odmoru. Primjenjuju se Uvjeti i odredbe.";
let sec2B = "Istražite RevPoints";

//section3 content
let sec3H = "KARTICE KOJE PLIJENE POGLEDE";
let sec3P = "Odaberite onu koji odgovara vašoj vibri. Primjenjuju se naknade.";
let sec3B = "Odaberite svoju karticu";

//section4 content
let sec4H = "SVEOBUHVATNA SIGURNOST";
let sec4P =
  "Ne samo da smo na raspolaganju i pratimo 0-24 vaša sredstva, već naša puna bankarska dozvola osigurava da za vaš novac jamči Litavsko državno društvo za osiguranje depozita i ulaganja (lit. Indėlių ir investicijų draudimas). A dobivate i podatke o IBAN računu.";
let sec4B = "Više informacija";

//section5 content
let sec5H = "NEKA VASA STEDNJA PROCVJETA";
let sec5P =
  "Uvećajte svoj novac uz do 5,34% APY* na uloženu ušteđevinu. Kamate se isplaćuju svakog dana.";
let sec5Psm =
  "Kamatna stopa za valutu USD prikazana je od 01. 10. 2023., ali je podložna promjenama na dnevnoj bazi. Rast nije zajamčen. Rizik za kapital.";
let sec5B = "Istražite značajku Štednja";

//section6 content
let sec6B = "Isprobajte";

//section7 content
let sec7H = "Brzi transferi na drugi kraj svijeta";
let sec7P =
  "Bilo da šaljete u Maroko ili Meksiko, slanje novca se izvršava u tren oka. A tečajevi? Odlični, baš onako kako ste načuli!";
let sec7B = "Saznajte kako";
let sec7V = "./assets/gridSec2.mp4";

//section8 content
let sec8H = "";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroSection title={heroH} paragraph={heroP} btnContent={heroB} />
      <VerticalHomeSection
        title={sec1H}
        paragraph={sec1P}
        btnContent={set1B}
        btnDesign="primaryBlackBtn"
      >
        <CarouselComponent />
      </VerticalHomeSection>
      <HorizontalHomeSection
        title={sec2H}
        paragraph={sec2P}
        btnContent={sec2B}
        btnDesign="primaryWhiteBtn"
        backgroundImage="./assets/section2bckg.png"
      >
        <img src="./assets/section2img.png" alt="section2img2" />
      </HorizontalHomeSection>
      <VerticalHomeSection
        title={sec3H}
        paragraph={sec3P}
        btnContent={sec3B}
        btnDesign="primaryWhiteBtn"
        backgroundColor="black"
      >
        <video autoPlay loop muted playsInline width="640" height="360">
          <source src="../assets/revolut-cards.mp4" type="video/mp4" />
        </video>
      </VerticalHomeSection>
      <VerticalHomeSection
        title={sec4H}
        paragraph={sec4P}
        btnContent={sec4B}
        btnDesign="primaryWhiteBtn"
        backgroundColor="black"
      >
        <img src="../assets/section3img.png" alt="section3img" />
      </VerticalHomeSection>
      <SavingsSection
        title={sec5H}
        paragraph={sec5P}
        smParagraph={sec5Psm}
        btnContent={sec5B}
        btnDesign="primaryWhiteBtn"
        backgroundColor="./assets/btnActionImg1.png"
        toggle={true}
      />
      <TransferSection
        btnContent={sec6B}
        btnDesign="primaryBlackBtn"
        toggle={true}
      />
      <TransferSection
        title={sec7H}
        paragraph={sec7P}
        btnContent={sec7B}
        btnDesign="primaryBlackBtn"
        video={sec7V}
        toggle={false}
      />
      <InvestmentSection btnDesign="primaryBlackBtn" toggle={true} />
    </div>
  );
}

export default App;

// const testComponent = ({ title, children }) => {
//   return <div>{children}</div>;
// };

{
  /* <testComponent title="blabla">
        <a href="google.com">aj na google</a>
      </testComponent> */
}
