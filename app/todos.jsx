"use client";
import { TodoItem } from "@/components/ServerComponents";
import axios from "axios";
import React, { useEffect, useState } from "react";

const todos = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    axios
      .get(`/api/task/mytasks`)
      .then((res) => setTasks(res.data.tasks))
      .catch((err) => alert(err.response.data.message));
  }, []);

  return (
    <div>
      <section className="todosContainer">
        {tasks ? tasks.map((task, key) => (
          <TodoItem
            title={task.title}
            description={task.description}
            id={task._id}
            completed={task.completed}
            key={key}
          />
        )) : "No Tasks"}
      </section>
    </div>
  );
};

export default todos;
