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
          <Col lg={10} style={{ width: "80%" }}>
            <h4 className="feed__name">Liadi Sulaimon</h4>
            <span className="feed__time">
              {" "}
              5h
              <i className="feed__public_icon"></i>
            </span>
          </Col>
          <Col lg={1} style={{ float: "right" }}>
            <Button className="hamburger_button">
              <i className="hamburger" />
            </Button>
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
            <img src={assets.heart} alt="Heart" width="17" />
            <img src={assets.like} alt="Like" width="17" />
            <span style={{marginLeft:"5px"}}>Juliet Anyakoha and 12 others</span>
          </Col>
          <Col lg="3">
            <span>13 Comments</span>
          </Col>
          <hr />
        </Row>
        <Row className="feed__actions">
          <Col lg={4}>
            <Button className="button">
              {" "}
              <i className="like">
                {" "}
                <span>Like</span>
              </i>
            </Button>
          </Col>
          <Col lg={4}>
            <Button className="button">
              {" "}
              <i className="comment">
                <span>Comment</span>
              </i>
            </Button>
          </Col>
          <Col lg={4}>
            <Button className="button">
              <i className="share">
                <span>Share</span>
              </i>
            </Button>
          </Col>
          <hr />
        </Row>
        <div className="comment_section">
          {/* <h3>View previous comments</h3> */}
          <Row>
            <Col lg={1}>
              <img
                src={assets.avatar_two}
                alt="profile_picture"
                className="comment_section__avatar"
              />
            </Col>
            <Col lg={10} style={{ width: "80%" }}>
              <div className="comment_bg">
                <h4 className="comment_section__name">Alabi Sumonu</h4>
                <span className="comment_section__comment">
                  My bro 💝
                </span>
              </div>
              <h6>Like · Reply · <span>28m</span></h6>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Feed;
