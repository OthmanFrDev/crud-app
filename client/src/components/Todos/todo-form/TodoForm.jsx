import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function TodoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(undefined);
  const [isEditMode, setTIsEditMode] = useState(false);

  useEffect(() => {
    if (id) {
      setTIsEditMode(true);
      fetch("http://localhost:8081/v1/todos/" + id, {
        method: "GET",
      })
        .then(async (data) => await data.json())
        .then((data) => setTask(data))
        .catch((err) => console.log(err));
    }
  }, []);

  const onEditChange = (e) => {
    setTask((prevState) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.name === "done" ? e.target.checked : e.target.value,
      };
    });
  };
  const saveTask = (e) => {
    let url = "http://localhost:8081/v1/todos/";
    let method = "POST";
    e.preventDefault();
    if (task !== undefined) {
      if (isEditMode) {
        url = url + id;
        method = "PUT";
      }
      fetch(url, {
        method: method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(task),
      })
        .then(async (data) => await data.json())
        .then((data) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <form>
      {isEditMode && (
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            disabled={isEditMode}
            value={task ? task.id : ""}
            onChange={onEditChange}
          />
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          onChange={onEditChange}
          value={task ? task.description : ""}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="createdAt" className="form-label">
          CreatedAt
        </label>
        <input
          type="date"
          className="form-control"
          id="createdAt"
          name="createdAt"
          onChange={onEditChange}
          value={task ? task.createdAt : ""}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="done" className="form-label">
          Done
        </label>
        <input
          type="checkbox"
          className="form-check-input"
          id="done"
          name="done"
          checked={task ? task.done : false}
          onChange={onEditChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      <button type="submit" className="btn btn-success m-2" onClick={saveTask}>
        {isEditMode ? "Update Task" : "Save Task"}
      </button>
    </form>
  );
}
