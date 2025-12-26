"use client";
import { useState } from "react";
import { LogInIcon, UserPlus2, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView="visible"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      className="flex justify-between shadow-md"
    >
      <header className="flex items-center justify-between text-2xl py-4 px-6 ">
        <span className="text-green-500 font-bold text-2xl">M</span>egethos
      </header>

      <div className="hidden md:flex p-5 items-center text-sm ">
        <ul className="flex gap-x-5 ">
          <li>
            {" "}
            <Link href={"#Features"}> Features </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"#Pricing"}> Pricing </Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"#FAQ"}> FAQ </Link>
          </li>
          <li>
            {" "}
            <Link href={"#Contact"}> Contact us </Link>{" "}
          </li>
        </ul>
      </div>

      <div className="relative">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center py-2 space-x-4">
          <button
            onClick={() => {}}
            className="flex items-center space-x-2 px-2 py-2 border-2 border-primary text-primary hover:text-primary/80 hover:bg-primary/10 font-semibold transition-all duration-200 rounded-md"
          >
            <LogInIcon className="w-4 h-4" />
            <span>Log in</span>
          </button>

          <button
            onClick={() => {}}
            className="flex items-center space-x-2 px-2 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-semibold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            <UserPlus2 className="w-4 h-4" />
            <span>Create an account</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-primary focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg flex flex-col space-y-2 p-3 md:hidden z-50">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 px-4 py-2 border border-primary text-primary hover:bg-primary/10 rounded-md font-medium transition-all"
            >
              <LogInIcon className="w-4 h-4" />
              <span>Log in</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-black hover:bg-primary/90 rounded-md font-medium transition-all"
            >
              <UserPlus2 className="w-4 h-4" />
              <span>Create an account</span>
            </button>

            <button
              className="-mt-2.5 w-full"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <ul className="flex flex-col text-left p-5 gap-y-6 ">
                <li>
                  {" "}
                  <Link
                    href={"#Features"}
                    className=" p-3 rounded hover:bg-green-500 transition duration-100"
                  >
                    {" "}
                    Features{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    href={"#Pricing"}
                    className=" p-3 rounded hover:bg-green-500 transition duration-100"
                  >
                    {" "}
                    Pricing{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    href={"#FAQ"}
                    className=" p-3 rounded hover:bg-green-500 transition duration-100"
                  >
                    {" "}
                    FAQ{" "}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    href={"#Contact"}
                    className=" p-3 rounded hover:bg-green-500 transition duration-100"
                  >
                    {" "}
                    Contact us{" "}
                  </Link>{" "}
                </li>
              </ul>
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
