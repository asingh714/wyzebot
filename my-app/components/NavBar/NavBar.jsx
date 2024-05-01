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
    <nav className="text-white p-10 flex justify-center ">
      <div className="flex justify-between items-center max-w-[900px] w-full">
        <h1 className="text-3xl font-bold">WyzeBot</h1>
        {session && (
          <Link href="/dashboard" className="text-2xl hover:text-gray-300 z-50">
            Dashboard
          </Link>
        )}
        {!session &&
          providers &&
          Object.values(providers).map((provider, index) => (
            <button
              onClick={() => signIn(provider.id)}
              key={index}
              className="flex items-center text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 z-50 transition duration-300 ease-in-out"
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
