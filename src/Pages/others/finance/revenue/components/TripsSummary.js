import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NairaFailed, NairaSuccess, NairaUndecided } from "../../../../../assets/svgs/financeSvgs";
import FilterOptions from "../../../../../components/filter/Filter";
import { tripsItems, tripsTypesOptions } from "../data";

function TripsSummary() {
  const [tripType, setTripType] = useState("all");
  const [tripTypeFilterToggled, setTripTypeFilterToggled] = useState(false);
  const handleTripTypeFilterToggle = () => setTripTypeFilterToggled((prevState) => !prevState);
  const handleTripTypeChange = (e) => {
    setTripType(e.target.value);
  };
  return (
    <Card>
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>Online Trips</div>
          <div>
            <small>
                {/* <FilterOptions toggled={tripTypeFilterToggled} handleToggle={handleTripTypeFilterToggle} options={tripsTypesOptions} selectedOption={tripType} optionChange={handleTripTypeChange} name="trip_type" /> */}
                <FilterOptions toggled={tripTypeFilterToggled} handleToggle={handleTripTypeFilterToggle} options={tripsTypesOptions} selectedOption={tripType} optionChange={handleTripTypeChange} name="trip_type" />
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
