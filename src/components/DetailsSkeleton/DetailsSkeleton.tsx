const DetailsSkeleton = () => {
  return (
    <div className="details container">
      <div className="details-wrapper">
        <div className="details__top">
          <div className="details__images skeleton-image"></div>
          <div className="details__info">
            <div className="details__product details-item">
              <h2 className="skeleton-title"></h2>
              <div className="car skeleton-car"></div>
            </div>
            <div className="details__price details-item skeleton-price"></div>
            <div className="details__desc details-item skeleton-desc"></div>
            <div className="details__service">
              <div className="details__service-item">
                <p className="skeleton-service"></p>
              </div>
              <div className="details__service-item">
                <p className="skeleton-service"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="details__bottom">
          <h3>Спецификация</h3>
          <div className="details__specs">
            <div className="details__specs-left skeleton-specs"></div>
            <div className="details__specs-right skeleton-specs"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsSkeleton
