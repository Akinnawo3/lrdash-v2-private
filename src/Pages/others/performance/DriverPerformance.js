import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";

import TopFive from "./components/driversPerformance/topFive";
import PerformanceTable from "./components/driversPerformance/performanceTable";
import "../../../assets/scss/compliance.scss";
import { useTripsApiServices } from "../../../services/tripsApiServices";
import DoughnutDriversPerformance from "./components/driversPerformance/doughnutDriversPerformance";
import DriversPerformanceChart from "./components/driversPerformance/driversPerformanceChart";
import DriverDetails from "./components/driversPerformance/DriverDetails";

const DriverPerformance = () => {
  const { getPerformance } = useTripsApiServices();
  useEffect(() => {
    getPerformance();
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
              <DriversPerformanceChart />
            </Col>
            <Col className="mt-3">
              <PerformanceTable />
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={3} className="mt-3">
          {/* <TopFive /> */}
          <DriverDetails />
        </Col>
      </Row>
    </div>
  );
};

export default DriverPerformance;
