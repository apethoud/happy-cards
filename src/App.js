import "./App.scss";
import HeaderFooter from "./components/HeaderFooter";
import HolidayPicker from "./components/HolidayPicker";
import Home from "./components/Home";

function App() {
  return (
    <>
      <HeaderFooter>
        {/* <Home /> */}
        <HolidayPicker />
      </HeaderFooter>
    </>
  );
}

export default App;
