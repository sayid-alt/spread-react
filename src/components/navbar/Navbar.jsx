import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full z-20 top-0 left-0 shadow-sm bg-white border-gray-600">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-2 px-5">
          <Link
            to={"signUp"}
            className="text-blue-700 border duration-300 ease-in-out border-blue-700 hover:border-blue-800 hover:text-blue-800 relative hover:scale-105 hover:ring-5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 focus:ring-blue-800"
          >
            Sign Up
          </Link>
          <div className="flex md:order-2">
            <Link
              to={"login"}
              className="text-white relative duration-300 ease-in-out bg-blue-700 hover:bg-blue-800 hover:scale-105 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  focus:ring-blue-800"
            >
              Login
            </Link>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2   focus:ring-gray-600"
              aria-controls="navbar-sticky"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 gap-10 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0    ">
              <li>
                <a
                  href="#"
                  className="block py-2 relative duration-300 ease-in-out hover:scale-105 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="block py-2 relative duration-300 ease-in-out hover:scale-105 pl-3 pr-4 font-bold text-xl text-gray-900 rounded    md:p-0 md:hover:text-blue-500  hover:text-white  border-gray-700"
                >
                  Spreads
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 relative duration-300 ease-in-out hover:scale-105 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 hover:text-white border-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10v9Zm-2 2V9l8-6l8 6v12h-7v-6h-2v6H4Zm8-8.75Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
