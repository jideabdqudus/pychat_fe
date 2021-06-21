import React from "react";
import { Button } from "reactstrap";
import { DownCircleTwoTone } from "@ant-design/icons";

import Avatar from "../../assets/avatar.png";
import CovidIcon from "../../assets/covid.png";
import FriendsIcon from "../../assets/friends.png";
import GroupsIcon from "../../assets/groups.png";
import MarketPlaceIcon from "../../assets/marketplace.png";
import WatchIcon from "../../assets/watch.png";
import EventsIcon from "../../assets/events.png";
import MemoriesIcon from "../../assets/memories.png";
import SavedIcon from "../../assets/saved.png";
import PagesIcon from "../../assets/pages.png";
import JavaIcon from "../../assets/java.png";

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
        <li>
          <Button className="myBtn">
            <img
              src={FriendsIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Friends</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={GroupsIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Groups</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={MarketPlaceIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Marketplace</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={WatchIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Watch</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={EventsIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Events</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={MemoriesIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Memories</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={SavedIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Saved</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <img
              src={PagesIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Pages</h3>
          </Button>
        </li>
        <li>
          <Button className="myBtn">
            <DownCircleTwoTone
              className="myBtn__avatar"
              twoToneColor="#606770"
              style={{
                fontSize: "26px",
                paddingLeft: "3px",
                paddingBottom: "3px",
              }}
            />
            <h3>See more</h3>
          </Button>
        </li>
      </ul>
      <hr />
      <h2>Your Shortcuts</h2>
      <ul>
        <li>
          <Button className="myBtn">
            <img
              src={JavaIcon}
              alt="profile_picture"
              className="myBtn__avatar"
            />
            <h3>Andela Learning Community</h3>
          </Button>
        </li>
      </ul>
      <span className="aside_left__buttonSpan">
        Privacy · Terms · Advertising · More · Ad Choices · Cookies · Facebook · Jideabdqudus
        © 2021
      </span>
    </div>
  );
};

export default AsideL;
