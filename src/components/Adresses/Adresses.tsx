import React from 'react'
import mtsLogo from '/icons/mts-logo.svg'
import velcomeLogo from '/icons/velcome-logo.svg'

const Adresses = () => {
  return (
    <div className="adresses">
      <div className="adresses__item">
        <h3 className="adresses__adress">
          ул. Г/Подпольщиков, 18 <br />
          Авторынок "Бакуненский"
        </h3>
        <div className="adresses__phones">
          <div>
            <img src={mtsLogo} alt="mts" />
            <p>+375 29 752 27 57</p>
          </div>
          <div>
            <img src={velcomeLogo} alt="velcome" />
            <p>+375 29 752 27 57</p>
          </div>
        </div>
      </div>
      <div className="adresses__item">
        <h3 className="adresses__adress">
          ул. Ефремова <br />
          Авторынок "Ефремовский"
        </h3>
        <div className="adresses__phones">
          <div>
            <img src={mtsLogo} alt="mts" />
            <p>+375 29 752 27 57</p>
          </div>
          <div>
            <img src={velcomeLogo} alt="velcome" />
            <p>+375 29 752 27 57</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Adresses
