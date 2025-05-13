import React from "react";
import { useState } from "react";

const ListRender = () => {
  //   const [list] = useState(["Lucas", "Maria", "João"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Lucas" },
    { id: 2, name: "Maria" },
    { id: 3, name: "João" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}

      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
