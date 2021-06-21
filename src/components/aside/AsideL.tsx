import React from "react";
import { Button } from "reactstrap";

import Avatar from "../../assets/avatar.png";
import CovidIcon from "../../assets/covid.png";
import FriendsIcon from "../../assets/friends.png"
import GroupsIcon from "../../assets/groups.png"
import MarketPlaceIcon from "../../assets/marketplace.png"
import WatchIcon from "../../assets/watch.png"
import EventsIcon from "../../assets/events.png"
import MemoriesIcon from "../../assets/memories.png"
import SavedIcon from "../../assets/saved.png"
import PagesIcon from "../../assets/pages.png"

const AsideL: React.FC = () => {
  return (
    <div className="aside_left">
      <ul>
        <li>
          <Button className="myBtn">
            <img src={Avatar} alt="profile_picture" className="myBtn__avatar" />
            <h3>Abdul Qudus A O</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={CovidIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>COVID-19 Information Center</h3>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AsideL;
