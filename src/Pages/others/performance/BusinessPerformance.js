import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import DougnutProjection from "./components/doughnutRevenue";
import DailyTripsGraph from "./components/revenueTrendGraph.js.js";
import TopFive from "./components/topFive";
import PerformanceTable from "./components/performanceTable";
import "../../../assets/scss/compliance.scss";
import { useTripsApiServices } from "../../../services/tripsApiServices";
import RevenueTrendGraph from "./components/revenueTrendGraph.js.js";

const BusinessPerformance = () => {
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
              <DougnutProjection />
            </Col>
            <Col md={12} lg={8} className="mt-3">
              <RevenueTrendGraph />
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

export default BusinessPerformance;
