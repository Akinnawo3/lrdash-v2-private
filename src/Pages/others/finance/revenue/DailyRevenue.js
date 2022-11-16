import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { WatchListSVG1 } from "../../../../assets/svgs/svgs";

const DailyRevenue = () => {
  return (
    <div className="mb-3">
      <Row>
        <Col className="mt-3" md={3}>
          <Card>
            <CardBody>
              <div className="d-flex justify-content-between">
                <WatchListSVG1 />
                <small className="gradient-text fw-bold">+34%</small>
              </div>
              <div>
                <div className="fs-4">4,963</div>
                <small className="text-muted lh-small">Total Driver</small>
              </div>
            </CardBody>
          </Card>
        </Col>
        {/* <Col className="mt-3" xs={12}>
          <PerformanceTable />
        </Col> */}
      </Row>
    </div>
  );
};

export default DailyRevenue;
