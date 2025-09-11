import { useContext } from "react";
import { AppContext } from "./App";
import logo from "./assets/logo.png";

// Header component
export default function Header() {
  return (
    <div className="header">
      <img src={ logo } alt="logo" className="logo" />
      <div className="enrollment">Classes Enrolled: 1</div>
    </div>
  );
}
