import React from "react";
import { Container } from "reactstrap";
import { FilterOutlined } from "@ant-design/icons";

import StoryReel from "./StoryReel";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Container>
        <ul>
          <li className="active">Home</li>
          <li>Favorites</li>
          <li>Recent</li>
          <li className="icon">
            <FilterOutlined style={{ margin: 0, padding: "0" }} />
          </li>
        </ul>
        <hr />
        <Container>
          <StoryReel />
        </Container>
      </Container>
    </div>
  );
};

export default Home;
