import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import { Notes, Logout , UserSettings} from "grommet-icons";
import { Heading} from "grommet";


const Header = () => {
  let color = "#0fc5fc";

  return (
    <header className={style.appHeader}>
      <div>
        <NavLink to="notes"><Notes size="large" color={color} /></NavLink>
        <NavLink to="settings"><UserSettings size="large" color={color} /></NavLink>
      </div>
      <Heading margin="none" color={color}>
        Taking notes
      </Heading>
      <Logout size="large" color={color} />
    </header>
  );
};

export default Header;
