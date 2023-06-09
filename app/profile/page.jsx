"use client";
import { Context } from "@/components/clients";
import React, { useContext } from "react";

const Page = () => {
  const { user } = useContext(Context);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Page;
