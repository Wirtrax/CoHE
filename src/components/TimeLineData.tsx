import { useAppSelector } from "../app/hooks";

const TimeLineData: React.FC = () => {
  const { activeIndex, categories } = useAppSelector(
    (state) => state.historyEvent
  );
  const activeCategory = categories[activeIndex];
  const years = activeCategory.events.map((event) => event.year);
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  return (
    <div className="Timeline">
      <h2 className="Timeline__from">{minYear}</h2>
      <h2 className="Timeline__to">{maxYear}</h2>
    </div>
  );
};

export default TimeLineData;
