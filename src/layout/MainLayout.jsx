import React from "react";
import "./main-layout.scss";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";

function MainLayout() {
  return (
    <>
      {" "}
      <Sidebar />
      <div className="main">
        <div className="main_content">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
