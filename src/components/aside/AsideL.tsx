import React from "react";

import Avatar from "../../assets/avatar.png";
import CovidIcon from "../../assets/covid.png";

const AsideL: React.FC = () => {
  return (
    <div className="aside_left">
      <ul>
        <li>
          <div className={"profileDetails"}>
            <img
              src={Avatar}
              alt="profile_picture"
              className="profileDetails__avatar"
            />
            <h3>Abdul Qudus A O</h3>
          </div>
        </li>
        {/* <li>
          <div className={"profileDetails"}>
            <img
              src={CovidIcon}
              alt="profile_picture"
              className="profileDetails__avatar"
            />
            <h3>COVID-19 Information Center</h3>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default AsideL;
