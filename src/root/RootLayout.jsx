import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Container from "../component/Container";
import styles from "../root/RootLayout.module.css";
import { IoMoon } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import spinner from "../assets/spinner.svg";
import { useNavigation } from "react-router-dom";

function RootLayout() {
  const location = useNavigation();

  const [isDark, setIsDark] = useState(() => {
    if (localStorage.getItem("dark")) {
      return JSON.parse(localStorage.getItem("dark"));
    } else {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDark));

    if (isDark) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [isDark]);
  return (
    <>
      <header>
        <Container>
          <nav className={styles.nav}>
            <h1 className={styles.logo}>Where in the world ?</h1>
            {isDark ? (
              <button
                className={styles.themeBtn}
                onClick={() => {
                  setIsDark(false);
                }}
              >
                <IoMoon />
                Light Mode
              </button>
            ) : (
              <button
                className={styles.themeBtn}
                onClick={() => {
                  setIsDark(true);
                }}
              >
                <IoMoonOutline />
                Dark Mode
              </button>
            )}
          </nav>
        </Container>
      </header>
      <main>
        <Container>
          {location.state == "loading" ? (
            <img src={spinner} alt="loading" />
          ) : (
            <Outlet />
          )}
        </Container>
      </main>
    </>
  );
}

export default RootLayout;
