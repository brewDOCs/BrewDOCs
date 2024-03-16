import React from "react";

export default async function Header() {
  return (
    <header className="text-gray-600 body-font bg-slate-300/35 ">
      <div className="container mx-auto py-3 flex flex-wrap md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0">
          <span className="ml-3 text-xl">BrewDocs</span>
        </a>
        <nav className="md:mr-auto flex flex-wrap items-center font-semibold justify-center">
          <a className="ml-5 hover:text-gray-900">About</a>
          <a className="ml-5 hover:text-gray-900">Contact Us</a>
        </nav>
        <a className="mr-5 hover:text-gray-900 font-semibold">Login</a>
        <button className="inline-flex font-semibold items-center bg-amber-200 border-0 py-1 px-3 focus:outline-none hover:bg-amber-300 rounded text-base mt-4 md:mt-0">
          Get Started
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
