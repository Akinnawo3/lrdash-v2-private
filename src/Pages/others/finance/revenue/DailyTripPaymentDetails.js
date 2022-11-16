import classNames from "classnames";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const DailyTripPaymentDetails = () => {
  return (
    <Card>
      <CardBody>
        <div className={classNames("card-title")}>Trip 1234567890123</div>

        <Row>
          <Col md={4}>
            <div></div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default DailyTripPaymentDetails;
