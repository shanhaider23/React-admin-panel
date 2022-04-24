import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/login/Login";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  };

  const [user, setUser] = useState({ name: "", email: "" });

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
    }
  };

  return (
    <div>
      {user.email != "" ? (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Blank />} />
            <Route path="products" element={<Blank />} />
            <Route path="customers" element={<Blank />} />
            <Route path="settings" element={<Blank />} />
            <Route path="stats" element={<Blank />} />
          </Route>
        </Routes>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}

export default App;
