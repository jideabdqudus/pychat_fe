import React from "react";
import { Container, Row, Col } from "reactstrap";
import { assets } from "../../constants";

const Post: React.FC = () => {
  return (
    <Container>
      <div className="post">
        <Row>
          <Container>
            <Col lg={24}>
              <img src={assets.avatar} alt="avatar" className="avatar" />
              <input placeholder="What's on your mind, Abdul-Qudus?" />
            </Col>
          </Container>
        </Row>
        <Row>
          <Col span={8}>
            <div>
              <i
                className="icon"
                style={{ backgroundImage: `url(${assets.icon_set})` }}
              ></i>
              <p>asjsjas</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Post;
