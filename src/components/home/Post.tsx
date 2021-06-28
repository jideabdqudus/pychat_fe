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
        <hr />
        <Row>
          <Col span={5}>
            <div className="postActions">
              <i
                className="postActions__icon"
                style={{
                  backgroundImage: `url(${assets.icon_set})`,
                  marginLeft: "40px",
                  backgroundPosition: "10px -82px",
                }}
              >
                s
              </i>
              <span className="postActions__icon_text">Live Video</span>
            </div>
          </Col>
          <Col span={5} style={{ padding: 0 }}>
            <div className="postActions">
              <i
                className="postActions__icon"
                style={{
                  backgroundImage: `url(${assets.icon_set})`,
                  backgroundPosition: "10px -381px",
                }}
              >
                s
              </i>
              <span className="postActions__icon_text">Photo/Video</span>
            </div>
          </Col>
          <Col span={5} style={{ paddingLeft: 0, paddingRight: "30px" }}>
            <div className="postActions">
              <i
                className="postActions__icon"
                style={{
                  backgroundImage: `url(${assets.icon_set})`,
                  backgroundPosition: "10px -255px",
                }}
              >
                s
              </i>
              <span className="postActions__icon_text">Feeling/Activity</span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Post;
