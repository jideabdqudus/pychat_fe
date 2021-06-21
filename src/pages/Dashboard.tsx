import { Row, Col, Container } from "reactstrap";

import HeaderContainer from "../layout/index";
import Aside from "../components/aside/index";

const Dashboard = () => {
  return (
    <div>
      <HeaderContainer />
      <Container fluid={true}>
        <Row>
          <Col lg={3}>
            <Aside />
          </Col>
          <Col lg={6}>Loremx30</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
