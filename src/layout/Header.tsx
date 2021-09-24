import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  SearchOutlined,
  AppstoreOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import FacebookLogo from "../assets/fb_logo.svg";
import HomeIcon from "../assets/fb_home.svg";
import TvIcon from "../assets/fb_tv.svg";
import MarketPlaceIcon from "../assets/fb_marketplace.svg";
import GameIcon from "../assets/fb_games.svg";
import Avatar from "../assets/avatar.png";
import MessengerIcon from "../assets/fb_messenger.svg";
import NotificationIcon from "../assets/fb_notifications.svg";

const Header: React.FC = () => {
  return (
    <div className="header_row">
      <Container fluid={true}>
        <Row>
          <Col lg={3} style={{width:"30%"}}>
            <img src={FacebookLogo} alt="Logo" className="facebook_logo" />
            <i className="icon">
              <SearchOutlined className="icon" />
            </i>
            <input placeholder="Search Facebook" />
          </Col>
          <Col lg={5} style={{ paddingRight: "0px", width:"44%" }}>
            <ul>
              <li className="active">
                <img src={HomeIcon} alt="Home" className="home_icon" />
              </li>
              <li className="hover">
                <div className="notification">
                  <img src={TvIcon} alt="Watch" className="_icon" />
                  <span className="badge">7</span>
                </div>
              </li>
              <li className="hover">
                <img
                  src={MarketPlaceIcon}
                  alt="Market Place"
                  className="_icon"
                />
              </li>
              {/* <li className="hover">
                <img src={GroupIcon} alt="Groups" className="_icon" />
              </li> */}
              <li className="hover">
                <img src={GameIcon} alt="Game" className="_icon" />
              </li>
            </ul>
          </Col>
          <Col lg={3} style={{ padding: "0px" }}>
            <div className={"profileDetails"}>
              <img
                src={Avatar}
                alt="profile_picture"
                className="profileDetails__avatar"
              />
              <h3>Abdul Qud...</h3>
            </div>
            <div style={{ float: "right" }}>
              <div className="fastIcons">
                <AppstoreOutlined className="fastIcons__icon" />
              </div>
              <div className="fastIcons">
                <div className="notification">
                  <img
                    src={MessengerIcon}
                    alt="Messenger"
                    className="fastIcons__icon__image"
                  />
                  <span className="badge-two">2</span>
                </div>
              </div>
              <div className="fastIcons">
                <div className="notification">
                  <img
                    src={NotificationIcon}
                    alt="Notification"
                    className="fastIcons__icon__image"
                  />
                  <span className="badge-two">5</span>
                </div>
              </div>
              <div className="fastIcons">
                <CaretDownOutlined className="fastIcons__icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
