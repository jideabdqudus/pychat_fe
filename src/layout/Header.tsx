import React from "react";
import { Row } from "reactstrap";

import FacebookLogo from "../assets/fb_logo.png";

const Header: React.FC = () => {
  return (
    <Row>
      <div>
        <img src={FacebookLogo} alt="Logo" />
        <input />
      </div>
    </Row>
  );
};

export default Header;
