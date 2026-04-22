import React from "react";

export const AddUserButton = React.memo(({ onAdd }) => {
  console.log("AddUserButton render");

  return <button onClick={onAdd}>Добавить пользователя</button>;
});
