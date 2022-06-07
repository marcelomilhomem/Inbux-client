import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/LoginPage";
import Signuppage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import CoffeesPage from "./pages/CoffeesPage";
import BrewingPage from "./pages/BrewingPage";
import CoffeeDetails from "./pages/CoffeeDetails";
import WelcomePage from "./pages/WelcomePage";
import UserProfile from "./pages/UserProfile";
import BrewingDetails from "./pages/BrewingDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/brewing" element={<BrewingPage />} />
        <Route path="/brewing/:brewingId" element={<BrewingDetails/>}/>
        <Route path="/coffees" element={<CoffeesPage />} />
        <Route path="/coffees/:coffeeId" element={<CoffeeDetails />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
