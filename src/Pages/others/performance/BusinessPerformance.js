import React, { useEffect } from "react";
import { Card, Col, Row } from "reactstrap";
import DougnutProjection from "./components/businessPerformance/doughnutRevenue";
import DailyTripsGraph from "./components/businessPerformance/revenueTrendGraph.js.js";
import TopFive from "./components/driversPerformance/topFive";
import PerformanceTable from "./components/driversPerformance/performanceTable";
import "../../../assets/scss/compliance.scss";
import { useTripsApiServices } from "../../../services/tripsApiServices";
import RevenueTrendGraph from "./components/businessPerformance/revenueTrendGraph.js.js";
import PerformanceTripsChart from "./components/businessPerformance/performanceTripsChart";
import PerformanceActiveVehiclesChart from "./components/businessPerformance/performanceActiveVehiclesChart";
import BlankCard from "../../../components/BlankCard";

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
              <Row>
                <Col md={6}><PerformanceTripsChart /></Col>
                <Col md={6}><PerformanceActiveVehiclesChart /></Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={3} className="mt-3 vh-90">
          <BlankCard />
        </Col>
      </Row>
    </div>
  );
};

export default BusinessPerformance;
