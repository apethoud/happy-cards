import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderFooter(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("theme is: ", theme);

  return (
    <>
      <div>
        <div className="HeaderFooterColorBar" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="Logo">HappyCards</div>
          <div className="ThemeButtonWrapper" onClick={() => toggleTheme()}>
            <FontAwesomeIcon
              icon={theme === "dark" ? faMoon : faSun}
              size="xl"
            />
          </div>
        </div>
      </div>
      {props.children}
      <div>
        <div className="Copyright">&copy; 2022 Andrew Pethoud</div>
        <div className="HeaderFooterColorBar" />
      </div>
    </>
  );
}
