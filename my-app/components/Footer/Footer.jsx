import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-16 flex justify-center items-center">
      <div className="flex justify-between items-center max-w-[900px] w-full">
        <h1 className="text-3xl font-bold">WyzeBot</h1>
        <div>© 2024 WyzeBot. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
