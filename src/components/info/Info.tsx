import React, { Fragment } from 'react'
import { Container, Row, Col } from "reactstrap";
import { assets } from "../../constants";



const Info = () => {
  return (
    <Fragment>
      <div className="info">
        <div className="info__birthdays">
          <h6>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/uZcEIx7yRqF.png?_nc_eui2=AeFDDrqCjlGxkWk5PbCG_kue_63W3ZSARWb_rdbdlIBFZiDXh31Z2sj6M0EM3f72veD_kBahwkh-UchsCGnDPPaT" alt="present" width="20" />
            Birthdays
          </h6>
          <ul>
            <li>
              <b>Osaretin Ebeuehi</b>'s Birthday is today
            </li>
          </ul>
        </div>
        <div className="info__sponsored">
          <h6>Sponsored</h6>
          <Row className="info__sponsored__hover">
            <Col lg={6}>
              <img src={assets.google} alt="Sponsored" width="100" style={{borderRadius:"10px"}}/>
            </Col>
            <Col lg={6}>
              <span>Expand your knowledge with Google IT</span>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col lg={6}>
              <img src={assets.ja} alt="Sponsored" width="100" style={{borderRadius:"10px"}}/>
            </Col>
            <Col lg={6}>
              <span>Learn more about the Jideabdqudus here</span>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  )
}

export default Info
