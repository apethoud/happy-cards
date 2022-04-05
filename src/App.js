import "./App.scss";
import HeaderFooter from "./components/HeaderFooter";
import CardBuilder from "./components/CardBuilder";
import Home from "./components/Home";

function App() {
  return (
    <>
      <HeaderFooter>
        {/* <Home /> */}
        <CardBuilder />
      </HeaderFooter>
    </>
  );
}

export default App;
