import ToggleSwitch from "./ToggleSwitch";
import { useTheme } from "./ThemeProvider";


export default function ThemeToggle() {

  const { dark, setDark } = useTheme();


  return (
    <div className="flex items-center gap-2">
      Theme: {dark ? "Dark" : "Light"}

      <ToggleSwitch
        checked={dark}
        onChange={setDark}
      />

    </div>
  );
}