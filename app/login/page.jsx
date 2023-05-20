"use client";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = () => {};

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
