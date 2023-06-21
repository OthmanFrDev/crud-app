import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TodoForm() {
  const { id } = useParams();
  const [taskToEdit, setTaskToEdit] = useState();
  useEffect(() => {
    fetch("http://localhost:8081/v1/todos/" + id, {
      method: "GET",
    })
      .then(async (data) => await data.json())
      .then(data=>setTaskToEdit(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Id
        </label>
        <input
          type="text"
          className="form-control"
          id="id"
          disabled
          value={taskToEdit?.id}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={taskToEdit?.description}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="createdAt" className="form-label">
          CreatedAt
        </label>
        <input
          type="text"
          className="form-control"
          id="createdAt"
          value={taskToEdit?.createdAt}
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
          checked={taskToEdit?.done}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {taskToEdit ? "Update Task" : "Save Task"}
      </button>
    </form>
  );
}
