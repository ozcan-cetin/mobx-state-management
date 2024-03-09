// src/components/AuthComponent.js
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import authStore from "../stores/AuthStore";

const AuthComponent = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    authStore.login(username, password);
  };

  const handleLogout = () => {
    authStore.logout();
  };

  return (
    <div>
      {authStore.isAuthenticated ? (
        <div>
          <p>Welcome, {authStore.user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {authStore.errorMessage && <p style={{ color: "red" }}>{authStore.errorMessage}</p>}
        </div>
      )}
    </div>
  );
});

export default AuthComponent;
