import React from 'react'
import "../savingsSection/SavingsSection.css";
import ButtonComponent from '../../buttonComponent/ButtonComponent'

const MembershipSection = ( {title, btnContent, btnDesign} ) => {
  return (
    <div className="toggle-vertical-section black center">
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