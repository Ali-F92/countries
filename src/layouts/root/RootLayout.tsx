import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { Outlet } from "react-router-dom";
import "./root-layout.css";
import { useEffect, useState } from "react";

export const RootLayout = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const onChangeThemeHandler = () => {
    setDarkTheme((prev) => {
      localStorage.setItem("darkTheme", String(!prev));
      return !prev;
    });
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("darkTheme");
    setDarkTheme(localTheme ? (localTheme === "true" ? true : false) : false);
    // console.log("localTheme", localTheme);
  }, []);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <header className="header">
        <h3>Where in the world?</h3>
        <button className="theme" onClick={onChangeThemeHandler}>
          <div>
            <FontAwesomeIcon
              className="themeIcon"
              icon={darkTheme ? faSun : faMoon}
            />
          </div>
          <div>{darkTheme ? "Light" : "Dark"} Mode</div>
        </button>
      </header>
      <div className="headerPlaceholder"></div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};
