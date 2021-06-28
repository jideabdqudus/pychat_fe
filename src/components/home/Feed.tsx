import React from "react";
import { Container, Button, Row, Col } from "reactstrap";
import { assets } from "../../constants";

const Feed: React.FC = () => {
  return (
    <Container>
      <div className="feed">
        <Row className="feed__profile_row">
          <Col lg={1} style={{ width: "10%" }}>
            <img
              src={assets.avatar_one}
              alt="profile_picture"
              className="feed__avatar"
            />
          </Col>
          <Col lg={8}>
            <h4 className="feed__name">Liadi Sulaimon</h4>
            <span className="feed__time">5h</span>
          </Col>
        </Row>
        <div>
          <img
            src={assets.avatar_one}
            alt="feed_image"
            className="feed__image"
          />
        </div>
        <Row className="feed__actions_number">
          <Col lg="9">
            <span>12</span>
          </Col>
          <Col lg="3">
            <span>13 Comments</span>
          </Col>
          <hr />
        </Row>
        <Row className="feed__actions">
          <Col lg={4}>
            <Button className="button">Like</Button>
          </Col>
          <Col lg={4}>
            <Button className="button">Comment</Button>
          </Col>
          <Col lg={4}>
            <Button className="button">Share</Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Feed;
