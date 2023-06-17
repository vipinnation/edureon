"use client";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const NavbarComponent = (props: Props) => {
  const [menuItems, setMenuItems] = useState<Array<any>>([]);

  const toggleNavbar = (event: any) => {
    try {
      const burger = document.querySelectorAll(".navbar-burger");
      const menu = document.querySelectorAll(".navbar-menu");
      setMenuItems(menu as any);
      if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeNavbar = (event: any) => {
    try {
      const close = document.querySelectorAll(".navbar-close");
      const backdrop = document.querySelectorAll(".navbar-backdrop");

      if (close.length) {
        for (var i = 0; i < close.length; i++) {
          for (var j = 0; j < menuItems.length; j++) {
            menuItems[j].classList.toggle("hidden");
          }
        }
      }

      if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
          backdrop[i].addEventListener("click", function () {
            for (var j = 0; j < menuItems.length; j++) {
              menuItems[j].classList.toggle("hidden");
            }
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-primary">
        <a className="text-3xl font-bold leading-none" href="#">
          <Image src={logo} alt="logo" width={50} />
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white p-3 font-bold"
            onClick={toggleNavbar}
          >
            <svg
              className="block h-4 w-4 fill-current font-bold"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li>
            <Link
              className="text-md text-secondary hover:text-gray-500 navlink border-g"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-md text-secondary hover:text-gray-500 navlink border-g"
              href="#"
            >
              About Us
            </a>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-md text-secondary hover:text-gray-500 navlink border-g"
              href="#"
            >
              Courses
            </a>
          </li>

          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a
              className="text-md text-secondary hover:text-gray-500 navlink border-g"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="navbar-menu relative z-50 hidden duration-700">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image src={logo} alt="logo" width={80} />
            </a>
            <button className="navbar-close" onClick={closeNavbar}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div>
            <ul>
              <li className="mb-1">
                <Link
                  href="/"
                  className="block p-4 navlink border-g text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 navlink border-g text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4  navlink border-g text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Courses
                </a>
              </li>

              <li className="mb-1">
                <a
                  className="block p-4 navlink border-g text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarComponent;
