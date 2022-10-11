import React, {useEffect} from "react";
import {Col, Row} from "reactstrap";
import DougnutProjection from "./components/doughnut";
import DailyTripsGraph from "./components/dailyTripsGraph";
import TopFive from "./components/topFive";
import PerformanceTable from "./components/performanceTable";
import "../../../assets/scss/compliance.scss";
import {useTripsApiServices} from "../../../services/tripsApiServices";

const Performance = () => {
  const {getTodayCompliance} = useTripsApiServices();
  useEffect(() => {
    getTodayCompliance();
  }, []);

  return (
    <div className="table-wrapper mb-3">
      <Row>
        <Col md={7} lg={8}>
          <Row>
            <Col md={12} lg={4} className="mt-3">
              <DougnutProjection />
            </Col>
            <Col md={12} lg={8} className="mt-3">
              <DailyTripsGraph />
            </Col>
            <Col className="mt-3">
              <PerformanceTable />
            </Col>
          </Row>
        </Col>
        <Col md={5} lg={4} className="mt-3">
          <TopFive />
        </Col>
      </Row>
    </div>
  );
};

export default Performance;
