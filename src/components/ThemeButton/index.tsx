import { useTheme } from "../../hooks/useTheme";
import "./styles.scss";

export function ThemeButton() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={`theme-container ${theme}`}>
      <span>Switch theme</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
