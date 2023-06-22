import { Helmet } from "react-helmet";
import { images } from "./AboutData";


const About = () => {
  return (
    <div className="about container">
      <Helmet>
        <title>О нас | АВТО.ГОМЕЛЬ</title>
      </Helmet>
      <h2 className="about__title">О нас</h2>
      <div className="about__block1">
        <h3>О компании</h3>
        <div className="about__text">
          <p>Добро пожаловать в нашу компанию, специализирующуюся на продаже запчастей!</p>

          <p>Мы рады представить вам нашу компанию, которая является ведущим поставщиком запасных частей для различных
            видов техники. Наша миссия - обеспечить клиентов качественными и надежными запчастями, которые помогут им
            поддерживать и восстанавливать свои машины, оборудование и устройства в рабочем состоянии.
          </p>

          <p>Наш ассортимент запчастей охватывает широкий спектр отраслей, включая автомобильное производство,
            промышленное
            оборудование, электронику, сельскохозяйственную технику и многое другое. Мы тщательно подбираем наши
            поставщики, чтобы гарантировать высокое качество и долговечность каждой запчасти.</p>

          <p>Наша команда состоит из опытных специалистов, готовых помочь вам в поиске нужных запчастей и предоставить
            профессиональные консультации по их установке и обслуживанию. Мы понимаем, что время играет важную роль в
            ремонте и обслуживании техники, поэтому наша цель - обеспечить быструю доставку запчастей, чтобы вы могли
            вернуть свою технику в работу как можно скорее.</p>

          <p>Кроме того, мы гордимся нашей конкурентоспособной ценовой политикой. Мы постоянно работаем над оптимизацией
            наших процессов, чтобы предложить вам лучшую цену на рынке. Мы стремимся стать вашим надежным партнером,
            который предлагает качественные запчасти по доступным ценам.</p>

          <p> Наша компания также активно инвестирует в исследования и разработки, чтобы быть в курсе последних
            технологических инноваций и предлагать вам самые современные запчасти. Мы уделяем большое внимание качеству
            и
            надежности наших продуктов, чтобы обеспечить вашу полную удовлетворенность.</p>

          <p>Если вам нужны запчасти для вашей техники, обратитесь в нашу компанию. Мы гарантируем высокое качество
            продукции, профессиональное обслуживание и оперативную доставку. Наша цель - помочь вам восстановить вашу
            технику и продлить ее срок службы.</p>
        </div>
      </div>

      <div className="about__gallery">
        {images.map((image, i) => (
          <div className="gallery__images" key={i}>
            <img src={image.imgage} alt="разборка" />
          </div>
        ))}
      </div>
      <div className="about__block3">

      </div>

    </div>
  );
};

export default About;
