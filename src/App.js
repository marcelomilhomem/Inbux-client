import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./pages/LoginPage";
import Signuppage from "./pages/SignupPage";
import Navbar2 from "./components/Navbar2";
import CoffeesPage from "./pages/CoffeesPage";
import BrewingPage from "./pages/BrewingPage";
import CoffeeDetails from "./pages/CoffeeDetails";
import WelcomePage from "./pages/WelcomePage";
import UserProfile from "./pages/UserProfile";
import BrewingDetails from "./pages/BrewingDetails";
import SuggestionPage from "./pages/SuggestionPage";
import SuggestionList from "./pages/SuggestionList";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route
          path="/brewing"
          element={
            <IsPrivate>
              <BrewingPage />
            </IsPrivate>
          }
        />
        <Route
          path="/brewing/:brewingId"
          element={
            <IsPrivate>
              <BrewingDetails />
            </IsPrivate>
          }
        />
        <Route
          path="/coffees"
          element={
            <IsPrivate>
              <CoffeesPage />
            </IsPrivate>
          }
        />
        <Route
          path="/coffees/:coffeeId"
          element={
            <IsPrivate>
              <CoffeeDetails />
            </IsPrivate>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <UserProfile />
            </IsPrivate>
          }
        />
        <Route
          path="/submit-suggestion"
          element={
            <IsPrivate>
              <SuggestionPage />
            </IsPrivate>
          }
        />
        <Route
          path="/suggestions"
          element={
            <IsPrivate>
              <SuggestionList />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
