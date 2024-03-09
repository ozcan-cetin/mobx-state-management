import { makeAutoObservable } from "mobx";

class PreferenceStore {
  darkMode = false;

  constructor() {
    makeAutoObservable(this);
    this.loadPreferences();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.savePreferences();
  }

  savePreferences() {
    localStorage.setItem("preferences", JSON.stringify({ darkMode: this.darkMode }));
  }

  loadPreferences() {
    const preferences = JSON.parse(localStorage.getItem("preferences"));
    if (preferences) {
      this.darkMode = preferences.darkMode;
    }
  }
}

const preferenceStore = new PreferenceStore();
export default preferenceStore;
