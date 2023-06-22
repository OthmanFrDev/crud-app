import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8081/v1/todos/", {
      method: "GET",
    })
      .then(async (data) => await data.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  const editTask = (id) => {
    navigate("/edit/" + id);
  };
  const deleteTask = (id) => {
    fetch("http://localhost:8081/v1/todos/" + id, {
      method: "DELETE",
    })
      .then((data) => setTasks(tasks.filter((t) => t.id != id)))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={() => navigate("/add")}>
        Create
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task Id</th>
            <th scope="col">Description</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Done</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <th scope="row">{t.id}</th>
              <td>{t.description}</td>
              <td>{t.createdAt}</td>
              <td>
                <input type="checkbox" checked={t.done} disabled />
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => editTask(t.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => deleteTask(t.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
