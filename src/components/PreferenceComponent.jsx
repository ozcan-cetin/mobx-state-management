import { observer } from "mobx-react-lite";
import preferenceStore from "../stores/PreferenceStore";

const PreferenceComponent = observer(() => {
  const handleToggleDarkMode = () => {
    preferenceStore.toggleDarkMode();
  };

  const isDarkMode = preferenceStore.darkMode === true
  const darkModeStyle = {
    backgroundColor:isDarkMode ? "#000" : "#fff",
    color:isDarkMode ? "#fff" : "#000"
  }

  return (
    <div style={darkModeStyle}>
      <h1>Preferences</h1>
      <label>
        <input
          type="checkbox"
          checked={preferenceStore.darkMode}
          onChange={handleToggleDarkMode}
        />
        Dark Mode
      </label>
    </div>
  );
});

export default PreferenceComponent;
