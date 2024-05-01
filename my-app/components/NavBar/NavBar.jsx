import React from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  return (
    <nav className="text-white p-10 flex justify-center ">
      <div className="flex justify-between items-center max-w-[900px] w-full">
        <h1 className="text-3xl font-bold">WyzeBot</h1>
        <Link href="/dashboard" className="text-2xl hover:text-gray-300 z-50">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
