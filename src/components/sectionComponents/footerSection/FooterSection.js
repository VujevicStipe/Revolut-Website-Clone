import React, { useEffect, useState } from "react";
import "../footerSection/FooterSection.css";
import "../privacyPolicySection/PrivacyPolicySection.css";
import { useWindowSize } from "../../WindowSizeContext";
import SubscriptionPlans from "../subscriptionPlans/SubscriptionPlans";

const FooterSection = () => {
  const { width } = useWindowSize();
  const [footerSectionRes, setFooterSectionRes] = useState(false);
  useEffect(() => {
    if (width < 720) {
      setFooterSectionRes(true);
    } else {
      setFooterSectionRes(false);
    }
  }, [width]);
  const toggleAccordion = (index) => {
    const accordion = document.querySelectorAll(".accordion-item")[index];

    accordion.classList.toggle("active");
  };

  return (
    <div className="footer-section">
      <SubscriptionPlans />
      <div className={`footer-navigation ${footerSectionRes ? "sm" : ""}`}>
        <ul
          className={footerSectionRes ? "accordion-item" : ""}
          onClick={() => toggleAccordion(0)}
        >
          <h5>Zivotni stil</h5>
          {footerSectionRes && <h5>↓</h5>}
          <ul className={footerSectionRes ? "panel" : ""}>
            <li>
              <a href="">Smjestaj i dozivljaji</a>
            </li>
            <li>
              <a href="">Donacije</a>
            </li>
            <li>
              <a href="">Osiguranje</a>
            </li>
          </ul>
        </ul>
        <ul
          className={footerSectionRes ? "accordion-item" : ""}
          onClick={() => toggleAccordion(1)}
        >
          <h5>Sigurnost</h5>
          {footerSectionRes && <h5>↓</h5>}
          <ul className={footerSectionRes ? "panel" : ""}>
            <li>
              <a href="">Sigurnosne greske</a>
            </li>
          </ul>
        </ul>
        <ul
          className={footerSectionRes ? "accordion-item" : ""}
          onClick={() => toggleAccordion(2)}
        >
          <h5>Racuni</h5>
          {footerSectionRes && <h5>↓</h5>}
          <ul className={footerSectionRes ? "panel" : ""}>
            <li>
              <a href="">Zajednicki racuni</a>
            </li>
            <li>
              <a href="">Stednja</a>
            </li>
            <li>
              <a href="">Pro za slobodne strucnjake</a>
            </li>
            <li>
              <a href="">Revolut &lt;Roditelji i skrbnici</a>
            </li>
            <h5>Portfelj</h5>
            <li>
              <a href="">Kriptovalute</a>
            </li>
            <li>
              <a href="">Dionice</a>
            </li>
            <li>
              <a href="">Plemeniti metali</a>
            </li>
          </ul>
        </ul>
        <ul
          className={footerSectionRes ? "accordion-item" : ""}
          onClick={() => toggleAccordion(3)}
        >
          <h5>Pomoc</h5>
          {footerSectionRes && <h5>↓</h5>}
          <ul className={footerSectionRes ? "panel" : ""}>
            <li>
              <a href="">Centar za pomoc</a>
            </li>
            <li>
              <a href="">Status sustava</a>
            </li>
            <li>
              <a href="">Zajednica</a>
            </li>
            <li>
              <a href="">API za razvojne inzinjere</a>
            </li>
            <li>
              <a href="">Karta stranice</a>
            </li>
          </ul>
        </ul>
        <ul
          className={footerSectionRes ? "accordion-item" : ""}
          onClick={() => toggleAccordion(4)}
        >
          <h5>Svakodnevno bankarstvo</h5>
          {footerSectionRes && <h5>↓</h5>}
          <ul className={footerSectionRes ? "panel" : ""}>
            <li>
              <a href="">Kartice</a>
            </li>
            <li>
              <a href="">Placanja</a>
            </li>
            <li>
              <a href="">Povezani racuni</a>
            </li>
            <li>
              <a href="">Proracuni i analize</a>
            </li>
          </ul>
        </ul>
        <ul
          className={footerSectionRes ? "accordion-item" : ""}
          onClick={() => toggleAccordion(5)}
        >
          <h5>Planovi</h5>
          {footerSectionRes && <h5>↓</h5>}
          <ul className={footerSectionRes ? "panel" : ""}>
            <li>
              <a href="">Standard</a>
            </li>
            <li>
              <a href="">Plus</a>
            </li>
            <li>
              <a href="">Premium</a>
            </li>
            <li>
              <a href="">Metal</a>
            </li>
            <li>
              <a href="">Ultra</a>
            </li>
            <li>
              <a href="">Usporedba planova</a>
            </li>
          </ul>
        </ul>
        <ul
          className={footerSectionRes ? "accordion-item" : ""}
          onClick={() => toggleAccordion(6)}
        >
          <h5>Tvrtka</h5>
          {footerSectionRes && <h5>↓</h5>}
          <ul className={footerSectionRes ? "panel" : ""}>
            <li>
              <a href="">O nama</a>
            </li>
            <li>
              <a href="">Kontakt</a>
            </li>
            <li>
              <a href="">Kultura</a>
            </li>
            <li>
              <a href="">Raznolikost i inkluzija</a>
            </li>
            <li>
              <a href="">Kodeks ponasanja</a>
            </li>
            <li>
              <a href="">Briga o okolisu</a>
            </li>
            <li>
              <a href="">Vodstvo</a>
            </li>
            <li>
              <a href="">Karijere</a>
            </li>
            <li>
              <a href="">Posao u Revolutu</a>
            </li>
            <li>
              <a href="">Partnerstva</a>
            </li>
            <li>
              <a href="">Novost i mediji</a>
            </li>
            <li>
              <a href="">Financijska izvjesca</a>
            </li>
            <li>
              <a href="">Godisnja izvjesca</a>
            </li>
          </ul>
        </ul>
      </div>
      <div className={`footer-divider ${footerSectionRes ? "sm" : ""}`}>
        <ul>
          <img src="./assets/revolut-logo.svg" alt="" />
          <ul>
            <li>
              <a href="">
                <img src="./assets/facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/instagram.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/twitter.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/linked-in.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="./assets/tik-tok.svg" alt="" />
              </a>
            </li>
          </ul>
        </ul>
        <div className="line"></div>
        <ul>
          <li>
            <a href="">Hrvatska</a>
          </li>
          <li>
            <a href="">Hrvatski</a>
          </li>
          <ul>
            <li>
              <a href="">Uvjeti za web-mjesto</a>
            </li>
            <li>
              <a href="">Privatnost</a>
            </li>
          </ul>
          <li>
            <a href="">Pravni ugovori</a>
          </li>
          <li>
            <a href="">Prituzbe</a>
          </li>
          <li>
            <a href="">Ranjivost korisnika</a>
          </li>
          <li>
            <a href="">Izjava o zastiti privatnosti podataka za kandidate</a>
          </li>
        </ul>
      </div>
      <div className="privacy-policy-section">
        <h5>© 2024 Revolut Bank UAB</h5>
        <br />
        <h5>
          Ako želite saznati više o tome od kojeg Revolut subjekta primate
          usluge kliknite ovdje. Ako imate još pitanja, obratite nam se putem
          čavrljanja unutar aplikacije Revolut. Revolut Bank UAB je banka
          osnovana u Republici Litvi. Adresa sjedišta: Konstitucijos ave. 21B,
          Vilnius, 08130, Republika Litva. Registracijski broj: 304580906, FI
          kod: 70700. Revolut Bank UAB licencirana je od strane Europske
          središnje banke, a regulirana je od strane Litavske središnje banke.
          Revolut Bank UAB pruža usluge kreditiranja, plaćanja, tekućeg računa i
          depozitnog računa po viđenju.
        </h5>
        <h5>
          Usluge distribucije osiguranja pruža Revolut Insurance Europe UAB,
          koju je Litavska središnja banka ovlastila kao društvo za posredovanje
          u osiguranju. Adresa sjedišta: Konstitucijos ave. 21B, Vilnius, 08130,
          Republika Litva, registracijski broj: 305910164.
        </h5>
        <h5>
          Revolut Ltd (br. 08804411) je ovlašten od strane Nadzornog tijela za
          financijsko poslovanje u skladu sa Zakonom o elektroničkom novcu iz
          2011. godine (matični broj tvrtke: 900562). Registrirana adresa: 7
          Westferry Circus, Canary Wharf, London, Engleska, E14 4HD, Ujedinjeno
          Kraljevstvo.
        </h5>
        <h5>
          Proizvode povezane s osiguranjem pružaju Revolut Travel Ltd, koje je
          Nadzorno tijelo za financijsko poslovanje ovlastilo za pružanje usluga
          posredovanja u osiguranju (FCA br: 780586), i Revolut Ltd, ovlašteni
          predstavnik tvrtke Revolut Travel Ltd u pogledu usluga posredovanja u
          osiguranju. Investicijske usluge u Europskom gospodarskom prostoru
          ("EGP") pruža Revolut Securities Europe UAB (registracijski kod
          305799582, adresa Konstitucijos ave. 21B, Vilnius, Litva, LT-08130),
          koju je Litavska središnja banka ovlastila kao brokersku tvrtku.
        </h5>
        <h5>
          Usluge kriptovaluta i plemenitih metala pruža Revolut Ltd. Revolut Ltd
          je registriran pri Nadzornom tijelu za financijsko poslovanje u
          Ujedinjenom Kraljevstvu za pružanje usluga kriptovaluta u skladu s
          Pravilnikom o sprječavanju pranja novca, financiranju terorizma i
          prijenosu sredstava (Informacije o platitelju) iz 2017. godine.
          Revolutovu uslugu plemenitih metala ne regulira Nadzorno tijelo za
          financijsko poslovanje.
        </h5>
      </div>
    </div>
  );
};

export default FooterSection;
