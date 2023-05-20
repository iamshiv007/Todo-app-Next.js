import { ContextProvider, LogoutBtn } from "@/components/clients";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>Header</h2>
      </div>

      <article>
        <Link href={"/"}>Home</Link>
        <Link href={"/profile"}>Profile</Link>
        <LogoutBtn />
      </article>
    </div>
  );
};

export default Header;
