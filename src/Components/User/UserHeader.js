import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/conta") setTitle("Conta");
    if (location.pathname === "/conta/estatisticas") setTitle("Estatísticas");
    if (location.pathname === "/conta/postar") setTitle("Postagens");
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title"> {title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
