import { useState } from "react";

interface DataItem {
  id: number;
  title: string;
  value: string;
}

function Scope() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data: DataItem[] = [
    { id: 1, title: "Разработка", value: "95%" },
    { id: 2, title: "Дизайн", value: "88%" },
    { id: 3, title: "Маркетинг", value: "75%" },
    { id: 4, title: "Аналитика", value: "92%" },
    { id: 5, title: "Тестирование", value: "85%" },
    { id: 6, title: "Поддержка", value: "90%" },
  ];

  const totalPoints = data.length;
  const targetAngle = 210;

  const angleStep = 360 / totalPoints;

  const getPointAngle = (index: number) => {
    const diff = index - activeIndex;
    let angle = targetAngle + diff * angleStep;
    if (angle < 0) angle += 360;
    if (angle >= 360) angle -= 360;

    return angle;
  };

  const getRotationDirection = (clickedIndex: number) => {
    const diff = clickedIndex - activeIndex;
    if (diff === 0) return 0;

    const positiveDiff = diff > 0 ? diff : diff + totalPoints;
    const negativeDiff = diff < 0 ? Math.abs(diff) : diff - totalPoints;

    return Math.abs(positiveDiff) < Math.abs(negativeDiff) ? 1 : -1;
  };

  const handlePointClick = (index: number) => {
    if (index === activeIndex) return;

    const direction = getRotationDirection(index);
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="w">
        <div className="scope">
          <span className="scope__line"></span>
          <span className="scope__line"></span>
          <div className="scope__circle">
            {data.map((item, index) => (
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
