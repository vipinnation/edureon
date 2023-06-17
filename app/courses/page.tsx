import DotsComponent from "@/components/ui/dots.component";
import React from "react";

type Props = {};

const Courses = (props: Props) => {
  return (
    <>
      <section className="lg:pt-6 pb-12">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mt-8 sm:mt-0 text-center mx-auto mb-4 max-w-[510px]">
                <h2 className=" font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4 ">
                  Our Courses
                </h2>
                <p className="text-base text-body-color"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 mx-4">
              <div className="bg-white rounded-xl relative  overflow-hidden border border-primary border-opacity-20 shadow-pricing p-8">
                <div className="flex items-center bg-[url('https://logowik.com/content/uploads/images/autocad8519.jpg')]">
                  <span className="text-primary font-semibold text-lg block">
                    Auto CAD
                  </span>
                  <img
                    src="https://logowik.com/content/uploads/images/autocad8519.jpg"
                    className="w-1/5 h-1/2"
                  />
                </div>

                <p className="text-base text-body-color pb-8  mb-8  border-b border-[#F2F2F2]">
                  4 week industrial training
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    2D - 2D Modelling
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Architech Planing
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    Architech Planiing
                  </p>
                </div>
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSd74L5KhI1DM6hDHaJB_yw01I4MVXbN9pyEsbqgBzpKWeKfXg%2Fviewform%3Fvc%3D0%26c%3D0%26w%3D1%26flr%3D0&e=AT04JtE4z3zPWeB3euoEHevDVubuQ0RgdX9XE055LLZAfxtAl7fnsyiLKk7ZxBMPATL31bMPWfV4u99m7tT7sfes5G7v_7CGgmsJY29w2rzxpRdO"
                  className="w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF]  rounded-md  text-center  p-4  hover:text-white hover:bg-primary hover:border-primary  transition  "
                >
                  Register now
                </a>
                <div className="z-10">
                  <DotsComponent />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 mx-4 my-4 sm:my-0">
              <div className="bg-white rounded-xl relative  overflow-hidden border border-primary border-opacity-20 shadow-pricing p-8">
                <div className="flex items-center">
                  <span className="text-primary font-semibold text-lg block">
                    Web Development
                  </span>
                  <img
                    className="w-1/5 mx-2"
                    src="https://thumbs.dreamstime.com/b/web-development-icon-logo-line-art-style-vector-illustration-83644923.jpg"
                  />
                </div>
                <p className="text-base text-body-color pb-8  mb-8  border-b border-[#F2F2F2]">
                  4 week industrial training
                </p>
                <div className="mb-7">
                  <p className="text-base text-body-color leading-loose mb-1">
                    HTML & CSS
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    JS
                  </p>
                  <p className="text-base text-body-color leading-loose mb-1">
                    React JS
                  </p>
                </div>
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSd74L5KhI1DM6hDHaJB_yw01I4MVXbN9pyEsbqgBzpKWeKfXg%2Fviewform%3Fvc%3D0%26c%3D0%26w%3D1%26flr%3D0&e=AT04JtE4z3zPWeB3euoEHevDVubuQ0RgdX9XE055LLZAfxtAl7fnsyiLKk7ZxBMPATL31bMPWfV4u99m7tT7sfes5G7v_7CGgmsJY29w2rzxpRdO"
                  className="w-full block text-base font-semibold text-primary bg-transparent border border-[#D4DEFF]  rounded-md  text-center  p-4  hover:text-white hover:bg-primary hover:border-primary  transition  "
                >
                  Register now
                </a>
                <div className="z-10">
                  <DotsComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
