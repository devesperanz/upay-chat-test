/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

function index({ title, subtitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[728px] mx-auto">
      <FontAwesomeIcon icon={["fas", "times"]} className="text-xl" />
      <div
        onClick={toggleAccordion}
        className="flex items-center justify-between space-x-3"
        aria-expanded={isOpen}
        aria-controls="collapse"
      >
        <h1 className="text-base font-bold font-asul">{title}</h1>
        <div>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="text-xl" />
          ) : (
            <FontAwesomeIcon icon={faPlus} className="text-xl" />
          )}
        </div>
      </div>
      {isOpen && (
        <div id="collapse" className="mt-4">
          {subtitle}
        </div>
      )}
      <hr className="my-8" />
    </div>
  );
}

export default index;
