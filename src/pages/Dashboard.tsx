import { Row, Col, Container } from "reactstrap";

import HeaderContainer from "../layout/index";
import Aside from "../components/aside/index";
import Home from "../components/home/index";
import Information from "../components/info/index"

const Dashboard = () => {
  return (
    <div>
      <HeaderContainer />
      <Container fluid={true} style={{ marginTop: "55px" }}>
        <Row>
          <Col lg={3}>
            <Aside />
          </Col>
          <Col lg={6}>
            <Home />
          </Col>
          <Col lg={3}>
            <Information/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
