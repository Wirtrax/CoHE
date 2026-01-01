import { useAppSelector } from "../app/hooks";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const TimeLineData: React.FC = () => {
  const { activeIndex, categories } = useAppSelector(
    (state) => state.historyEvent
  );
  const activeCategory = categories[activeIndex];
  const years = activeCategory.events.map((event) => event.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  const minYearRef = useRef<HTMLHeadingElement>(null);
  const maxYearRef = useRef<HTMLHeadingElement>(null);

  const prevMinYear = useRef<number>(minYear);
  const prevMaxYear = useRef<number>(maxYear);

  useEffect(() => {
    const animateNumber = (
      element: HTMLElement | null,
      from: number,
      to: number,
      duration: number = 0.8
    ) => {
      if (!element) return;

      const diff = Math.abs(to - from);
      const calculatedDuration = Math.min(duration, duration * (diff / 10));

      gsap.fromTo(
        element,
        {
          textContent: from.toString(),
        },
        {
          textContent: to.toString(),
          duration: calculatedDuration,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            const currentValue = Math.round(
              parseFloat(this.targets()[0].textContent || "0")
            );
            element.textContent = currentValue.toString();
          },
        }
      );
    };

    if (prevMinYear.current !== minYear) {
      animateNumber(minYearRef.current, prevMinYear.current, minYear);
      prevMinYear.current = minYear;
    }

    if (prevMaxYear.current !== maxYear) {
      animateNumber(maxYearRef.current, prevMaxYear.current, maxYear);
      prevMaxYear.current = maxYear;
    }
  }, [minYear, maxYear]);

  return (
    <div className="Timeline">
      <h2 ref={minYearRef} className="Timeline__from">
        {minYear}
      </h2>
      <h2 ref={maxYearRef} className="Timeline__to">
        {maxYear}
      </h2>
    </div>
  );
};

export default TimeLineData;
