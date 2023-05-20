import React from "react";
import "../styles/app.scss";
import Form from "./addTodoForm";
import Todos from "./todos";

const Page = () => {
  return (
    <div>
      <Form />
      <Todos />
    </div>
  );
};

export default Page;
