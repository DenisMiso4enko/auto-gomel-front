import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AppDispatch, RootState } from "../../store";
import { setCurrentPage } from "../../store/slices/autoPartsSlice";

const Pagination = () => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const { currentPage, limit, totalPages } = useSelector((state: RootState) => state.autoParts);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    setIsPrevDisabled(currentPage === 1);
    setIsNextDisabled(currentPage === totalPages);
  }, [currentPage, limit, totalPages]);


  return (
    <div className="pagination-container">
      <div className="pagination">
        <div className="pagination__left">
          <button
            className="pagination__btn icon"
            style={{ opacity: isPrevDisabled ? "0.5" : "" }}
            disabled={isPrevDisabled}
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          >
            <BsArrowLeft />
          </button>
        </div>
        <div>{currentPage}</div>
        <div className="pagination__right">
          <button
            className="pagination__btn icon"
            disabled={isNextDisabled}
            style={{ opacity: isNextDisabled ? "0.5" : "" }}
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
