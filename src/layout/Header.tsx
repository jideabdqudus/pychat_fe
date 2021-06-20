import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SearchOutlined } from "@ant-design/icons";

import FacebookLogo from "../assets/fb_logo.svg";
import HomeIcon from "../assets/fb_home.svg";
import TvIcon from "../assets/fb_tv.svg";
import MarketPlaceIcon from "../assets/fb_marketplace.svg";
import GroupIcon from "../assets/fb_group.svg";
import GameIcon from "../assets/fb_games.svg";

const Header: React.FC = () => {
  return (
    <div className="header_row">
      <Container fluid={true}>
        <Row>
          <Col lg={3}>
            <img src={FacebookLogo} alt="Logo" className="facebook_logo" />
            <i className="icon">
              <SearchOutlined className="icon" />
            </i>
            <input placeholder="Search Facebook" />
          </Col>
          <Col lg={6}>
            <ul>
              <li className="active">
                <img src={HomeIcon} alt="Home" className="home_icon" />
              </li>
              <li className="hover">
                <img src={TvIcon} alt="Watch" className="_icon" />
              </li>
              <li className="hover">
                <img
                  src={MarketPlaceIcon}
                  alt="Market Place"
                  className="_icon"
                />
              </li>
              <li className="hover">
                <img src={GroupIcon} alt="Groups" className="_icon" />
              </li>
              <li className="hover">
                <img src={GameIcon} alt="Game" className="_icon" />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
