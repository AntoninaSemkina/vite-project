import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ABOUT_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  PORTFOLIO_PAGE_ROUTE,
  SERVICES_PAGE_ROUTE,
} from "./components/utils/consts";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate(MAIN_PAGE_ROUTE)}>Main</button>
      <button onClick={() => navigate(ABOUT_PAGE_ROUTE)}>About</button>
      <button onClick={() => navigate(CONTACT_PAGE_ROUTE)}>Contact</button>
      <button onClick={() => navigate(PORTFOLIO_PAGE_ROUTE)}>Portfolio</button>
      <button onClick={() => navigate(SERVICES_PAGE_ROUTE)}>Services</button>
    </nav>
  );
};

export default Header;
