"use client";
import { useEffect, useRef } from "react";
import AboutUs from "./about-us/page";
import Courses from "./courses/page";

export default function Home() {
  const imgRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    changeImages();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const changeImages = () => {
    try {
      var imageSources = [
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      ];

      var index = 0;
      intervalRef.current = setInterval(function () {
        if (index === imageSources.length) {
          index = 0;
        }
        if (imgRef.current) {
          imgRef.current.classList.remove = "fade-out";
        }
        imgRef.current.src = imageSources[index];
        imgRef.current.classList.add = "fade-out";
        index++;
      }, 4000);
    } catch (error) {}
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              Empowering Education, Unleashing Potential
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Unlock your learning potential with our innovative courses.
              <br />
              Discover personalized learning, anytime, anywhere.
            </p>
          </div>
          <div className=" md:grid-cols-1 lg:mt-0 lg:col-span-5 lg:flex max-h">
            <img
              ref={imgRef}
              className="shadow-2xl rounded-md "
              src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      <Courses />


      <div className="my-32 sm:my-16"></div>
    </>
  );
}
