import "./App.css";
import { Routes, Route } from "react-router-dom";
// import TemplateOverview from "./components/TemplateOverview";
import TemplateOverview from "./Components/TemplateOverview"
import PricingPage from "./Components/PricingPage"
import NavBar from "./Components/NavBar/NavBar"
import Home_Page from "./Components/Home_Page/Home_Page";
import Login from './Components/Login_Page/Login';
import Register from './Components/Register_Page/Register';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/templateOverview" element={<TemplateOverview />} />
        <Route path="/pricingPage" element={<PricingPage />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
