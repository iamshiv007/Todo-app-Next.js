"use client";
import { TodoItem } from "@/components/ServerComponents";
import { Context } from "@/components/clients";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const todos = () => {
  const [tasks, setTasks] = useState([]);
  const { taskReload } = useContext(Context);

  useEffect(() => {
    axios
      .get(`/api/mytasks`)
      .then((res) => setTasks(res.data.tasks))
      .catch((err) => alert(err.response.data.message));
  }, [taskReload]);

  return (
    <div>
      <section className="todosContainer">
        {tasks.length !== 0
          ? tasks.map((task, key) => (
              <TodoItem
                title={task.title}
                description={task.description}
                id={task._id}
                isCompleted={task.isCompleted}
                key={key}
              />
            ))
          : "No Tasks"}
      </section>
    </div>
  );
};

export default todos;
