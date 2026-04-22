import React, { useState, useMemo, useCallback } from "react";
import { AddUserButton } from "./AddUserButton";

export const FilteredList = () => {
  console.log("🔄 FilteredList render");

  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "John" },
  ]);

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("📌 filtering...");
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  const addUser = useCallback(() => {
    console.log("➕ addUser called");
    setUsers((prev) => [...prev, { id: Date.now(), name: "New User" }]);
  }, []);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск"
      />

      <AddUserButton onAdd={addUser} />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
