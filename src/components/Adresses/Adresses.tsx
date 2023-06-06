import mtsLogo from '/icons/mts-logo.svg'
import velcomeLogo from '/icons/velcome-logo.svg'

const Adresses = () => {
  return (
    <div className="adresses">
      <div className="adresses__item">
        <h3 className="adresses__adress">
          Гомель, ул. Г/Подпольщиков, 18 <br />
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
        <div className="adresses__work">
          <p>
            пн-пт: 9:00 - 21:00 <br /> сб-вс: 8:00 - 22:00
          </p>
        </div>
      </div>
      <div className="adresses__item">
        <h3 className="adresses__adress">
          Гомель, ул. Ефремова <br />
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
        <div className="adresses__work">
          <p>
            пн-пт: 10:00 - 20:00 <br /> сб-вс: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Adresses
