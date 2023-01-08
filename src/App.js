import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";
import FiveDaysForecast from "./components/FiveDaysForecast";
import Home from "./components/Home";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/weather-app" element={<Home />} />
          <Route path="/weather-app/CountryInfo/:id" element={<CountryInfo />}/>
          <Route path="/weather-app/FiveDaysForecast/:id" element={<FiveDaysForecast />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
