import React from 'react'
import MapComp from '../Map/Map'
import Adresses from '../Adresses/Adresses'

const SectionAddresses = () => {
  return (
    <div className="section-addresses container">
      <h2 className="section-title">Наши адреса</h2>
      <MapComp />
      <Adresses />
    </div>
  )
}

export default SectionAddresses
