import React from "react";
import Navigation from "./Navigation/Navigation.tsx";
import Logo from "./Logo/Logo.tsx";
import ContactMe from "./ContactMe/ContactMe.tsx";
import style from "./style.module.css";
import ThemeToggle from "../ThemeButton/ThemeButton.tsx";

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <Logo />
      <Navigation />
      <ContactMe />
      <div className={style.container2}>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
