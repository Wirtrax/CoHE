import { useAppSelector, useAppDispatch } from "../app/hooks";
import { setActiveIndex } from "../features/dataEventSlice";

function Scope() {
  const dispatch = useAppDispatch();
  const { activeIndex, categories } = useAppSelector(
    (state) => state.historyEvent
  );

  const totalPoints = categories.length;
  const targetAngle = 210;

  const angleStep = 360 / totalPoints;

  const getPointAngle = (index: number) => {
    const diff = index - activeIndex;
    let angle = targetAngle + diff * angleStep;
    if (angle < 0) angle += 360;
    if (angle >= 360) angle -= 360;

    return angle;
  };

  const handlePointClick = (index: number) => {
    if (index === activeIndex) return;

    dispatch(setActiveIndex(index));
  };

  return (
    <div className="container">
      <div className="w">
        <div className="scope">
          <span className="scope__line"></span>
          <span className="scope__line"></span>
          <div className="scope__circle">
            {categories.map((item, index) => (
              <button
                key={item.id}
                className={`scope__circle-point point ${
                  index === activeIndex ? "active" : ""
                }`}
                style={{
                  transform: `rotate(${getPointAngle(
                    index
                  )}deg) translate(0, 250px) rotate(-${getPointAngle(
                    index
                  )}deg)`,
                  cursor: "pointer",
                }}
                onClick={() => handlePointClick(index)}
                aria-label={`Перейти к ${item.title}`}
              >
                <span className="point__number">{index + 1}</span>
                <h3 className="point__title">{item.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scope;
