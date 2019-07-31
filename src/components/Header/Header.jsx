import React from "react";
import s from "./Header.module.css";
import UserAvatar from "./UserAvatar/UserAvatar";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.arrow} />
      <UserAvatar first={true} />
    </header>
  );
};

export default Header;
