"use client";
import Link from "next/link";
import React, { useState } from "react";
import "../../styles/app.scss";
import axios from "axios";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async(e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("/api/auth/login", { email, password });
console.log(data)
      if (data.success) {
        alert("Logged In Successfully");
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <section>
        <form onSubmit={loginHandler}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
            type="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter Password"
            type="password"
          />
          <button type={"submit"}>Log In</button>
          <p>OR</p>
          <Link href="/register">New User</Link>
        </form>
      </section>
    </div>
  );
};

export default Page;
