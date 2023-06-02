const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-right">
        <div className="square"></div>
      </div>
      <div className="skeleton-left">
        <div className="line h25 w30"></div>
        <div className="line h20 w20"></div>
        <div className="line h20 w25"></div>
        <div className="line h20 w20"></div>
        <div className="skeleton-left__bottom mt30">
          <div className="line h20 w20"></div>
          <div className="line h25 w25"></div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton
