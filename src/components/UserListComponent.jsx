// src/components/UserList.js
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import userStore from "../stores/UserStore";

const UserListComponent = observer(() => {
  useEffect(() => {
    userStore.fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {userStore.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {userStore.users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default UserListComponent;
