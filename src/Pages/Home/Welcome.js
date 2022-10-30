import {
  faBuilding,
  faHelmetSafety,
  faHouseChimneyWindow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typewriter from "typewriter-effect";

const Welcome = () => {
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-4xl mb-6">
              Welcome to <br />
              <span className="text-primary">Alpha Steelwork</span>
            </h2>
            <hr className="border-2 mb-2 border-primary" />
            <div className="py-4">
              A Great Place to Work-Certified organization.
              <Typewriter
                options={{
                  strings: [
                    "We are spread across five continents with an employee base of over 65,000.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="col-span-3 grid gap-y-10 grid-cols-1 md:grid-cols-3 bg-white hover:shadow-2xl duration-300 lg:animate-bounce py-14">
            <div className="text-center md:flex md:justify-around">
              <div>
                <FontAwesomeIcon
                  icon={faHelmetSafety}
                  size="6x"
                ></FontAwesomeIcon>
                <p className="py-2 text-2xl">
                  We are professional <br />
                  <span className="text-xl font-thin">Blacksmiths</span>
                </p>
              </div>
              <div className="min-h-full border-l-2 border-l-gray-400 hidden md:block"></div>
            </div>
            <hr className="block md:hidden w-80 mx-auto border-b-2" />
            <div className="text-center  md:flex md:justify-around">
              <div>
                <FontAwesomeIcon
                  icon={faHouseChimneyWindow}
                  size="6x"
                ></FontAwesomeIcon>
                <p className="py-2 text-2xl">
                  Licensed & ensured <br />
                  <span className="text-xl font-thin">Industry</span>
                </p>
              </div>
              <div className="min-h-full border-l-2 border-l-gray-400 hidden md:block"></div>
            </div>
            <hr className="block md:hidden w-80 mx-auto border-b-2" />

            <div className="text-center">
              <FontAwesomeIcon icon={faBuilding} size="6x"></FontAwesomeIcon>
              <p className="py-2 text-2xl">
                Number One Company
                <br />
                <span className="text-xl font-thin">In Region</span>
              </p>
            </div>
            <hr className="block md:hidden w-80 mx-auto border-b-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
