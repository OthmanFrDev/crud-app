import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setTodos([
      {
        id: 1,
        description: "Description for todo 1",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 2,
        description: "Description for todo 2",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 3,
        description: "Description for todo 3",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 4,
        description: "Description for todo 4",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 5,
        description: "Description for todo 5",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 6,
        description: "Description for todo 6",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 7,
        description: "Description for todo 7",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 8,
        description: "Description for todo 8",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
      {
        id: 9,
        description: "Description for todo 9",
        createdAt: "2023-06-20T21:48:32.2298511",
      },
    ]);
  }, []);

  const editTask = (id) => {
    navigate("/edit/"+id)
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Task Id</th>
          <th scope="col">Description</th>
          <th scope="col">CreatedAt</th>
          <th scope="col">Done</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((t) => (
          <tr key={t.id}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.createdAt}</td>
            <td>
              <input type="checkbox" checked disabled />
            </td>
            <td>
              <button className="btn btn-primary" onClick={()=>editTask(t.id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
