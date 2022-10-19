import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";

import TopFive from "./components/driversPerformance/topFive";
import PerformanceTable from "./components/driversPerformance/performanceTable";
import "../../../assets/scss/compliance.scss";
import { useTripsApiServices } from "../../../services/tripsApiServices";
import DoughnutDriversPerformance from "./components/driversPerformance/doughnutDriversPerformance";

const DriverPerformance = () => {
  const { getTodayCompliance } = useTripsApiServices();
  useEffect(() => {
    getTodayCompliance();
  }, []);

  return (
    <div className="table-wrapper mb-3">
      <Row>
        <Col md={7} lg={9}>
          <Row>
            <Col md={12} lg={4} className="mt-3">
              <DoughnutDriversPerformance />
            </Col>
            <Col md={12} lg={8} className="mt-3">

            </Col>
            <Col className="mt-3">
              <PerformanceTable />
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={3} className="mt-3">
          <TopFive />
        </Col>
      </Row>
    </div>
  );
};

export default DriverPerformance;
