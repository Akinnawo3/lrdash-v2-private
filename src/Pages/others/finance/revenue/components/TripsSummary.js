import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NairaFailed, NairaSuccess, NairaUndecided } from "../../../../../assets/svgs/financeSvgs";

function TripsSummary() {
  const tripsItems = [
    {
      title: "Total",
      figure: "3,123,456,789",
      icon: NairaSuccess,
    },
    {
      title: "Successful",
      figure: "3,123,456,789",
      icon: NairaSuccess,
    },
    {
      title: "Undecided",
      figure: "3,123,456,789",
      icon: NairaUndecided,
    },
    {
      title: "Failed",
      figure: "3,123,456,789",
      icon: NairaFailed,
    },
  ];

  return (
    <Card>
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>Online Trips</div>
          <div>
            <small>
              <span>Online Trips</span>
              <span className="ms-2">Today</span>
            </small>
          </div>
        </div>
        <Row>
          {tripsItems.map((item) => (
            <Col sm={6} lg={3} className="mt-3">
              <div className="border border-grey rounded py-2 px-3">
                <div>
                  <item.icon />
                  <div className="fw-bold fs-4">{item.figure}</div>
                  <small className="text-muted">{item.title}</small>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
}

export default TripsSummary;
