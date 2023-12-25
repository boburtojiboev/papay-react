import React, { useState } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RestaurantPage } from "./screens/RestaurantPage";
import { CommunityPage } from "./screens/CommunityPage";
import { OrdersPage } from "./screens/OrdersPage";
import { MemberPage } from "./screens/MemberPage";
import { HelpPage } from "./screens/HelpPage";
import { LoginPage } from "./screens/LoginPage";
import { HomePage } from "./screens/HomePage";
import { NavbarHome } from "./components/header";
import { NavbarRestaurant } from "./components/header/restaurant";
import { NavbarOthers } from "./components/header/others";
import { Footer } from "./components/footer";
import Car from "./screens/testCar";
import AuthentificationModal from "./auth";

function App() {
  // INITIALIZATIONS
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signupOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  /** HANDLERS */

  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  const handleLoginOpen = () => setLoginOpen(true);

  const handleLoginClose = () => setLoginOpen(false);

  return (
    <Router>
      {main_path == "/" ? (
        <NavbarHome setPath={setPath}
        handleSignupOpen={handleSignupOpen}
        handleLoginOpen={handleLoginOpen}
      />
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant setPath={setPath}
        handleSignupOpen={handleSignupOpen}
        handleLoginOpen={handleLoginOpen}
      />
      ) : (
        <NavbarOthers setPath={setPath}
        handleSignupOpen={handleSignupOpen}
        handleLoginOpen={handleLoginOpen}
      />
      )}

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />

      <AuthentificationModal
        loginOpen={loginOpen}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
        signupOpen={signupOpen}
        handleSignupOpen={handleSignupOpen}
        handleSignupClose={handleSignupClose}
      />
    </Router>
  );
}
export default App;
