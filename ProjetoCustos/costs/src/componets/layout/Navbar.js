import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

const Navbar = () => {
  return (
    
      <nav className={styles.navbar}>
        <Container>
          <Link to="/">
            <img src={logo} alt="Costs" />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/">home</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Projects">projetos</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Company">compania</Link>
            </li>
            <li className={styles.item}>
              <Link to="/Contact">contato</Link>
            </li>
          </ul>
        </Container>
      </nav>
    
  );
};

export default Navbar;
