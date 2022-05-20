import "./App.scss";
import { AppBackground } from "./components/StyledComponents";
import HeaderFooter from "./components/HeaderFooter";
import CardBuilder from "./components/CardBuilder";
import Home from "./components/Home";

function App() {
  return (
    <AppBackground>
      <HeaderFooter>
        {/* <Home /> */}
        <CardBuilder />
      </HeaderFooter>
    </AppBackground>
  );
}

export default App;
