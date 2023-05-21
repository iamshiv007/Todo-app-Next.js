"use client";
import { Context } from "@/components/clients";
import axios from "axios";
import React, { useContext, useState } from "react";

const AddTodoForm = () => {
  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`/api/task/newtask`, { title, description, user: user._id })
      .then((res) => alert(res.data.message))
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Task Title"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Task Description"
          />
          <button type="submit">Add Task</button>
        </form>
      </section>
    </div>
  );
};

export default AddTodoForm;
