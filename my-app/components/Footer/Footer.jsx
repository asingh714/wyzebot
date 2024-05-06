import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-16 flex justify-center items-center">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center max-w-[900px] w-full">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">WyzeBot</h1>
        <div>© 2024 WyzeBot. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
