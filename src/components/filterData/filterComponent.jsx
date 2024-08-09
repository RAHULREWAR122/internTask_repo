import React, { useState } from "react";
import "./filter.css";
import { IoFilterSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

function FilterComponent({ data }) {
  const [showList, setShowList] = useState(false);

  const handleShowData = () => {
    setShowList(!showList);
  };

  return (
    <div className="container">
      <div className="top">
        <div className="btn">
          <button>
            <span>
              <IoFilterSharp />
            </span>{" "}
            <span> Filters</span>
          </button>

          <div className="actionBtn">
            <button onClick={handleShowData}>
              <span>
                <IoFilterSharp />
              </span>{" "}
              <span> Filters</span>
            </button>

            {showList && (
              <div className="list">
                <div className="head">
                  <h4>Refine by</h4>
                  <h4 onClick={handleShowData} className="clear">
                    clear
                  </h4>
                </div>

                <ul>
                  {data.map((data, i) => {
                    return (
                      <li key={i}>
                        {data} <IoIosArrowForward />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterComponent;
