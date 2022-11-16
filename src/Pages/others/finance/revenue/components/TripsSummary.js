import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { NairaSuccess, NairaUndecided } from "../../../../../assets/svgs/financeSvgs";

function TripsSummary() {
  const iconFailed = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="22" height="22" rx="4" fill="#FF3739" fill-opacity="0.1" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.604 10.9993C5.604 8.02097 8.02146 5.60352 10.9998 5.60352C13.9782 5.60352 16.3957 8.02097 16.3957 10.9993C16.3957 13.9777 13.9782 16.3952 10.9998 16.3952C8.02146 16.3952 5.604 13.9777 5.604 10.9993ZM10.9998 4.72852C7.53821 4.72852 4.729 7.53772 4.729 10.9993C4.729 14.461 7.53821 17.2702 10.9998 17.2702C14.4615 17.2702 17.2707 14.461 17.2707 10.9993C17.2707 7.53772 14.4615 4.72852 10.9998 4.72852ZM9.46619 8.6767C9.35596 8.6767 9.25396 8.71038 9.1764 8.78982C9.10376 8.86484 9.07377 8.96234 9.07377 9.06542V9.91363H9.05935C8.85608 9.91363 8.67697 10.0703 8.67697 10.2807C8.67697 10.491 8.85608 10.6477 9.05935 10.6477H9.07377V11.3897H9.05935C8.85608 11.3897 8.67697 11.5463 8.67697 11.7567C8.67697 11.9671 8.85608 12.1237 9.05935 12.1237H9.07377V12.9336C9.07377 13.0372 9.1034 13.1335 9.17205 13.2109L9.17602 13.215C9.25018 13.2916 9.34874 13.3224 9.45313 13.3224C9.55744 13.3224 9.65593 13.2916 9.73008 13.2151C9.80499 13.1383 9.83902 13.0405 9.83902 12.9336V12.1237H11.4825L12.3146 13.1688L12.3187 13.1734C12.4013 13.2676 12.5077 13.3224 12.6329 13.3224C12.7391 13.3224 12.8409 13.293 12.9163 13.2152C12.9912 13.1383 13.0253 13.0405 13.0253 12.9336V12.1145C13.191 12.078 13.3226 11.9371 13.3226 11.7567C13.3226 11.5763 13.191 11.4354 13.0253 11.3989V10.6384C13.191 10.6019 13.3226 10.461 13.3226 10.2807C13.3226 10.1003 13.191 9.95938 13.0253 9.92288V9.06542C13.0253 8.96328 12.9962 8.867 12.925 8.79227C12.8519 8.71121 12.7529 8.6767 12.6459 8.6767C12.5377 8.6767 12.4385 8.71218 12.3623 8.79021C12.2896 8.86523 12.26 8.96234 12.26 9.06542V9.91363H10.6515L9.79107 8.83042L9.78685 8.82561C9.70273 8.72971 9.59359 8.6767 9.46619 8.6767ZM9.83902 11.3897V10.6477H10.307L10.8979 11.3897L9.83902 11.3897ZM11.8242 11.3897L11.2347 10.6477H12.26V11.3897H11.8242Z"
        fill="#FF3739"
      />
    </svg>
  );

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
      icon: iconFailed,
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
