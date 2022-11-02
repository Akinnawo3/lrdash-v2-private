import React from "react";
import { Col, Row } from "reactstrap";
import PaymentMethodTrend from "./components/PaymentMethodTrend";
import TripsSummary from "./components/TripsSummary";

function Revenue() {
  return (
    <div>
      <Row>
        <Col sm={12}>
          <TripsSummary />
        </Col>
        <Col md={6} className="mt-3">
          {/* <PaymentMethodTrend /> */}
          <PaymentMethodTrend />
        </Col>
      </Row>
    </div>
  );
}

export default Revenue;
