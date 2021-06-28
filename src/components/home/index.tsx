import React from "react";
import { Container } from "reactstrap";
import { FilterOutlined } from "@ant-design/icons";

import "./types";
import StoryReel from "./StoryReel";
//import Feed from "./Feed";
import Post from "./Post";
import Rooms from "./Rooms";
import Feed from "./Feed";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Container>
        <ul>
          <li className="active">Home</li>
          <li>Favorites</li>
          <li>Recent</li>
          <FilterOutlined className="filter_icon" />
        </ul>
        <hr />
        <div>
          <StoryReel />
          <Post />
          <Rooms />
          <Feed />
        </div>
      </Container>
    </div>
  );
};

export default Home;
