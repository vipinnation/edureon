import Image from "next/image";
import React from "react";
import logo from "../../assets/images/logo.png";

type Props = {};

const FooterComponent = (props: Props) => {
  return (
    <footer className="text-white body-font bg-primary fixed left-0 bottom-0 w-full">
      <div className="px-2 sm:py-2 mx-auto flex items-center sm:flex-row flex-row">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 px-2">
          <Image src={logo} alt="logo" width={50} />
        </a>
        <div className="sm:flex mb-1 ml-8 sm:ml-0">
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} Edureon - All rights reserved
          </p>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-2">
            Call Us : +91 9783297827 , +91 9983809222
          </p>
        </div>
        <span className="absolute right-0 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
          <a className="mr-4 text-white" href="https://www.instagram.com/_edureon_/" target="_blank">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
