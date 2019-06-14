import React from "react";
import style from "./Header.module.scss";
import { Notes, Logout } from "grommet-icons";
import { Heading} from "grommet";
import { NavLink } from "react-router-dom";

const Header = () => {
  let color = "#0fc5fc";

  return (
    <header className={style.appHeader}>
      <div>
        <Notes size="large" color={color} />
        <NavLink to="myNotes">My notes</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </div>
      <Heading margin="none" color={color}>
        Taking notes
      </Heading>
      <Logout size="large" color={color} />
    </header>
  );
};

export default Header;
