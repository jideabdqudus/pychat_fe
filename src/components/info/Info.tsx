import React, { Fragment } from 'react'
import {  Row, Col } from "reactstrap";
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
              <b>Osaretin</b>'s Birthday is today.
            </li>
          </ul>
        </div>
        <hr/>
        <div className="info__sponsored">
          <h6>Sponsored</h6>
          <Row className="info__sponsored__hover">
            <Col lg={5}>
              <img src={assets.google} alt="Sponsored" width="100" style={{borderRadius:"10px"}}/>
            </Col>
            <Col lg={6}>
              <span>Expand your knowledge with Google IT</span>
            </Col>
          </Row>
          <Row className="info__sponsored__hover">
            <Col lg={5}>
              <img src={assets.ja} alt="Sponsored" width="100" style={{borderRadius:"10px"}}/>
            </Col>
            <Col lg={6}>
              <span>Learn more about Jideabdqudus</span>
              <a href="https://abdulqudus.com" target="__blank" rel="noopener">abdulqudus.com</a>
            </Col>
          </Row>
        </div>
        <hr/>
        <div className="info__contacts">
          <Row>
            <Col lg={8}>
              <h6>Contacts</h6>
            </Col>
            <Col lg={1}>
              <i className="info__contacts__vidcam"/>
            </Col>
            <Col lg={1}>
              <i className="info__contacts__search"/>
            </Col>
            <Col lg={1}>
              <i className="info__contacts__more"/>
            </Col>
          </Row>
          <div className="info__contacts__contact">
            <Row>
              <Col lg={2}>
                <div className='icon-container'>
                      <img 
                        src={assets.avatar_three}className="info__contacts__contact__profile__avatar"
                        alt="profile_picture"
                      />
                      <div className='status-circle'>
                      </div>
                  </div>
              </Col>
              <Col lg={7}>
                <h4>John Babatola</h4>
              </Col>
            </Row>
          </div>
          <div className="info__contacts__contact">
            <Row>
              <Col lg={2}>
                <div className='icon-container'>
                      <img 
                        src={assets.avatar_three}className="info__contacts__contact__profile__avatar"
                        alt="profile_picture"
                      />
                      <div className='status-circle'>
                      </div>
                  </div>
              </Col>
              <Col lg={7}>
                <h4>John Babatola</h4>
              </Col>
            </Row>
          </div>
          <div className="info__contacts__contact">
            <Row>
              <Col lg={2}>
                <div className='icon-container'>
                      <img 
                        src={assets.avatar_three}className="info__contacts__contact__profile__avatar"
                        alt="profile_picture"
                      />
                      <div className='status-circle'>
                      </div>
                  </div>
              </Col>
              <Col lg={7}>
                <h4>John Babatola</h4>
              </Col>
            </Row>
          </div>
          <div className="info__contacts__contact">
            <Row>
              <Col lg={2}>
                <div className='icon-container'>
                      <img 
                        src={assets.avatar_three}className="info__contacts__contact__profile__avatar"
                        alt="profile_picture"
                      />
                      <div className='status-circle'>
                      </div>
                  </div>
              </Col>
              <Col lg={7}>
                <h4>John Babatola</h4>
              </Col>
            </Row>
          </div>
          <div className="info__contacts__contact">
            <Row>
              <Col lg={2}>
                <div className='icon-container'>
                      <img 
                        src={assets.avatar_three}className="info__contacts__contact__profile__avatar"
                        alt="profile_picture"
                      />
                      <div className='status-circle'>
                      </div>
                  </div>
              </Col>
              <Col lg={7}>
                <h4>John Babatola</h4>
              </Col>
            </Row>
          </div>
          <div className="info__contacts__contact">
            <Row>
              <Col lg={2}>
                <div className='icon-container'>
                      <img 
                        src={assets.avatar_three}className="info__contacts__contact__profile__avatar"
                        alt="profile_picture"
                      />
                      <div className='status-circle'>
                      </div>
                  </div>
              </Col>
              <Col lg={7}>
                <h4>John Babatola</h4>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Info
