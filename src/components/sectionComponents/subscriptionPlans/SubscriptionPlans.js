import React, { useEffect, useState } from "react";
import "./SubscriptionPlans.css";
import { useWindowSize } from "../../WindowSizeContext";
import ButtonComponent from "../../buttonComponent/ButtonComponent";

const SubscriptionPlans = () => {
  const { width } = useWindowSize();
  const [subscriptionPlanRes, setSubscriptionPlanRes] = useState(false);
  useEffect(() => {
    if (width < 720) {
      setSubscriptionPlanRes(true);
    } else {
      setSubscriptionPlanRes(false);
    }
  }, [width]);
  return (
    <div className="subscription-plans">
      <h1>Odaberite svoj plan</h1>
      <div className={`container ${subscriptionPlanRes ? "sm" : ""}`}>
        <div className="item">
          <h2>Standard</h2>
          <h2>Besplatno</h2>
          <h3>
            Bez obzira želite li slati novac u inozemstvo ili se pridržavati
            proračuna s ugrađenim alatima, bolje iskoristite svoja sredstva s
            našim Standard računom.
          </h3>
          <ButtonComponent content="➔" />
        </div>
        <div className="item">
          <h2>Standard</h2>
          <h2>Besplatno</h2>
          <h3>
            Bez obzira želite li slati novac u inozemstvo ili se pridržavati
            proračuna s ugrađenim alatima, bolje iskoristite svoja sredstva s
            našim Standard računom.
          </h3>
          <ButtonComponent content="➔" />
        </div>
        <div className="item">
          <h2>Standard</h2>
          <h2>Besplatno</h2>
          <h3>
            Bez obzira želite li slati novac u inozemstvo ili se pridržavati
            proračuna s ugrađenim alatima, bolje iskoristite svoja sredstva s
            našim Standard računom.
          </h3>
          <ButtonComponent content="➔" />
        </div>
        <div className="item lg">
          <h2>Standard</h2>
          <h2>Besplatno</h2>
          <h3>
            Bez obzira želite li slati novac u inozemstvo ili se pridržavati
            proračuna s ugrađenim alatima, bolje iskoristite svoja sredstva s
            našim Standard računom.
          </h3>
          <ButtonComponent content="➔" />
        </div>
        <div className="item lg">
          <h2>Standard</h2>
          <h2>Besplatno</h2>
          <h3>
            Bez obzira želite li slati novac u inozemstvo ili se pridržavati
            proračuna s ugrađenim alatima, bolje iskoristite svoja sredstva s
            našim Standard računom.
          </h3>
          <ButtonComponent content="➔" />
        </div>
      </div>
      <h2>Sto cekate?</h2>
      <h1>Revolucionarno bankarstvo</h1>
      <ButtonComponent content="Saznajte vise" designType="primaryWhiteBtn" />
    </div>
  );
};

export default SubscriptionPlans;
