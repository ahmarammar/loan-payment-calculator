import React from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-zinc-900 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-start justify-between mx-auto py-3 px-4">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-calculator"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="16" x2="16" y1="14" y2="18" />
            <path d="M16 10h.01" />
            <path d="M12 10h.01" />
            <path d="M8 10h.01" />
            <path d="M12 14h.01" />
            <path d="M8 14h.01" />
            <path d="M12 18h.01" />
            <path d="M8 18h.01" />
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">find my loan</span>
        </Link>
        <div className="items-center justify-between flex w-auto order-1 gap-2 sm:gap-5" id="navbar-cta">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
