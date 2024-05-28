
import "./App.css";
import Chart from "./components/Chart";
import Company from "./components/Company";
import Navbar from "./components/Navbar";
import TickerTape from "./components/TickerTape";
import Info from "./components/Info";
import News from "./components/News";
import Market from "./components/Market";
import TradingComponent from "./components/Buysell";
import Heatchart from "./components/Heatchart";
import Overview from "./components/Overview";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <TickerTape />
      <div className="flex">
        <div className="flex flex-col items-start">
          <Company/>
          <Chart />
          <Market />
          <Heatchart/>
          <Overview/>
        </div>
        <div className="flex flex-col">
          <TradingComponent/>
          <About/>
          <Info />
          <News />
        </div>
      </div>
    </>
  );
}

export default App;
