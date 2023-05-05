import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={isLoggedIn ? <Navigate to="/shop" /> : <Login onLogin={handleLogin} />}
        />
        <Route path="/shop" element={isLoggedIn ? <Shop /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
