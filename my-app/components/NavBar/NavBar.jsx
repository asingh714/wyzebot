"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProviders();
  }, []);

  return (
    <nav className="text-white p-5 flex justify-center bg-black">
      <div className="flex justify-between items-center max-w-[900px] w-full">
        <h1 className="text-3xl font-bold">WyzeBot</h1>
        {session && (
          <div className="">
            <Link
              href="/dashboard"
              className="text-2xl hover:text-gray-300 mr-4 z-50"
            >
              Dashboard
            </Link>
            <button
              onClick={() => signOut()}
              className=" text-white text-2xl hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition duration-300 ease-in-out z-50"
            >
              Sign Out
            </button>
          </div>
        )}
        {!session &&
          providers &&
          Object.values(providers).map((provider, index) => (
            <button
              onClick={() => signIn(provider.id)}
              key={index}
              className="flex items-center text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 transition duration-300 ease-in-out z-50"
            >
              <FaGoogle className="fa-brands fa-google text-white mr-2"></FaGoogle>
              <span>Login or Register</span>
            </button>
          ))}
      </div>
    </nav>
  );
};

export default NavBar;
