import React from 'react'
import MapComp from '../Map/Map'
import Adresses from '../Adresses/Adresses'

const SectionAdresses = () => {
  return (
    <div className="section-adresses container">
      <h2 className="section-title">Наши адреса</h2>
      <MapComp />
      <Adresses />
    </div>
  )
}

export default SectionAdresses
