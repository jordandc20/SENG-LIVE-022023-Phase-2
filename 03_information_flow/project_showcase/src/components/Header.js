import React from "react";
import { useState } from "react";

//here it is a prop not a state, so it cannot be changed in the child component. this is why we use the onToggleDarkMode()  instead of writting he logic here
const Header = ({isDarkMode,onToggleDarkMode}) => {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => onToggleDarkMode();

  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
