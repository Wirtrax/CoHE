import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setActiveIndex } from "../features/dataEventSlice";

function ButtonYear() {
  const [isNullBefore, setisNullBefore] = useState(false);
  const dispatch = useAppDispatch();

  const { activeIndex, categories } = useAppSelector(
    (state) => state.historyEvent
  );

  const activeCategory = categories[activeIndex];
  const totalCategories = categories.length;

  useEffect(() => {
    if (activeCategory.id < 10 || totalCategories < 10) {
      setisNullBefore(true);
    } else {
      setisNullBefore(false);
    }
  }, [activeCategory.id, totalCategories]);

  const handleNext = () => {
    if (activeIndex < totalCategories - 1) {
      dispatch(setActiveIndex(activeIndex + 1));
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      dispatch(setActiveIndex(activeIndex - 1));
    }
  };

  const formatNumber = (num: number) => {
    return isNullBefore && num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="buttonYear">
      <p className="buttonYear__counter">
        {formatNumber(activeCategory.id)}/{formatNumber(totalCategories)}
      </p>
      <div className="buttonYear__content">
        <button
          className="buttonYear__button prev"
          onClick={handlePrev}
          disabled={activeIndex === 0}
          style={{
            zIndex: 100,
            opacity: activeIndex === 0 ? 0.5 : 1,
            cursor: activeIndex === 0 ? "not-allowed" : "pointer",
          }}
        ></button>
        <button
          className="buttonYear__button next"
          onClick={handleNext}
          disabled={activeIndex === totalCategories - 1}
          style={{
            opacity: activeIndex === totalCategories - 1 ? 0.5 : 1,
            cursor:
              activeIndex === totalCategories - 1 ? "not-allowed" : "pointer",
          }}
        ></button>
      </div>
    </div>
  );
}

export default ButtonYear;
