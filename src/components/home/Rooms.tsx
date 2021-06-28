import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import { assets } from "../../constants";

const Rooms: React.FC = () => {
  return (
    <Container>
      <div className="rooms">
        <Row>
          <Col lg={5}>
            <Button className="myBtn">
              <i
                style={{
                  backgroundImage: `url(${assets.rooms_set})`,
                }}
                className="myBtn__avatar"
              />
              <h3>Create Room</h3>
            </Button>
          </Col>
          <Col lg={2} style={{ width: "10%" }}>
            <div className={"profileDetails"}>
              <img
                src={assets.avatar_one}
                alt="profile_picture"
                className="profileDetails__avatar"
              />
            </div>
          </Col>
          <Col lg={2} style={{ width: "10%" }}>
            <div className={"profileDetails"}>
              <img
                src={assets.avatar_two}
                alt="profile_picture"
                className="profileDetails__avatar"
              />
            </div>
          </Col>
          <Col lg={2} style={{ width: "10%" }}>
            <div className={"profileDetails"}>
              <img
                src={assets.avatar_three}
                alt="profile_picture"
                className="profileDetails__avatar"
              />
            </div>
          </Col>
          <Col lg={2} style={{ width: "10%" }}>
            <div className={"profileDetails"}>
              <img
                src={assets.avatar_four}
                alt="profile_picture"
                className="profileDetails__avatar"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Rooms;
