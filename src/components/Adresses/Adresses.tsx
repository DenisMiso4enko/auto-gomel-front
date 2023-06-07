import mtsLogo from "/icons/mts-logo.svg";
import velcomeLogo from "/icons/velcome-logo.svg";
import { addressesData } from "./data";
import HistoryIcon from "@mui/icons-material/History";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Addresses = () => {
  return (
    <div className="addresses">
      {addressesData?.map(item => (
        <div className="addresses__item">
          <div className="addresses__left">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="addresses__right">
            <h3 className="addresses__address">
              {item.address} <br />
              {item.name}
            </h3>
            <div className="addresses__phones">
              <div>
                <img src={mtsLogo} alt="mts" />
                <a href={`tel:${item.phone1}`}>{item.phone1}</a>
              </div>
              <div>
                <img src={velcomeLogo} alt="velcome" />
                <a href={`tel:${item.phone2}`}>{item.phone2}</a>
              </div>
            </div>
            <div className="addresses__email">
              <AlternateEmailIcon />
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </div>
            <div className="addresses__work">
              <HistoryIcon />
              <p>{item.open} {item.openWeekend}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Addresses;
