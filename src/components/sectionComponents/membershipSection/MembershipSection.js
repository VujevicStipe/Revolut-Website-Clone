import React from 'react'
import "../savingsSection/SavingsSection.css";
import { useWindowSize } from "../../WindowSizeContext";
import ButtonComponent from '../../buttonComponent/ButtonComponent'

const MembershipSection = ( {title, btnContent, btnDesign} ) => {
  // responsive
  const { deviceType } = useWindowSize();
  return (
    <div className={`toggle-vertical-section black center ${deviceType}`}>
      <div className="vertical-home-section-content">
        <h1>{title}</h1>
        <ButtonComponent
          content={btnContent}
          designType={btnDesign}
        />
      </div>
    </div>
  )
}

export default MembershipSection