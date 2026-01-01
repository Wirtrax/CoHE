import ButtonYear from "./components/ButtonYear";
import HistoryEventsSlider from "./components/HistoryEventsSlider";
import Scope from "./components/Scope";
import TimeLineData from "./components/TimeLineData";
import Title from "./components/Title";

function App() {
  return (
    <main>
      <Scope />
      <section className="section container">
        <Title />
        <TimeLineData />
        <div className="historySwitcher">
          <ButtonYear />
          <HistoryEventsSlider />
        </div>
      </section>
    </main>
  );
}

export default App;
