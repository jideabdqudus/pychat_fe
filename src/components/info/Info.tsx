import React from 'react'
import { Container, Button, Row, Col } from "reactstrap";


const Info = () => {
  return (
    <Container>
      <div className="info">
        <div className="info__birthdays">
          <h6>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/uZcEIx7yRqF.png?_nc_eui2=AeFDDrqCjlGxkWk5PbCG_kue_63W3ZSARWb_rdbdlIBFZiDXh31Z2sj6M0EM3f72veD_kBahwkh-UchsCGnDPPaT" alt="present" width="20" />
            Birthdays
          </h6>
          <ul>
            <li>
              <b>Osaretin</b>'s Birthday is today
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Info
