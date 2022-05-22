import {
  faBuilding,
  faHelmetSafety,
  faHouseChimneyWindow,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Welcome = () => {
  return (
    <section>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h1 class="text-4xl">
              Welcome to <br />
              <span className="text-secondary">Alpha Steelwork</span>
            </h1>
            <p className="py-4">
              A Great Place to Work-Certified organization, we are spread across
              five continents with an employee base of over 65,000.
            </p>
          </div>
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 bg-white py-14">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faHelmetSafety}
                size="6x"
              ></FontAwesomeIcon>
              <p class="py-2 text-2xl">
                We are professional <br />
                <span className="text-xl font-thin">Blacksmiths</span>
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon
                icon={faHouseChimneyWindow}
                size="6x"
              ></FontAwesomeIcon>
              <p class="py-2 text-2xl">
                Licensed & ensured <br />
                <span className="text-xl font-thin">Industry</span>
              </p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faBuilding} size="6x"></FontAwesomeIcon>
              <p class="py-2 text-2xl">
                Number One Company
                <br />
                <span className="text-xl font-thin">In Region</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
