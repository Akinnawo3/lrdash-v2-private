import { TableCell, TableRow, TableBody, TableHead } from "@material-ui/core";
import classNames from "classnames";
// import {TableCell, TableRow,TableBody,TableHead} from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

import { Card, CardTitle, Input, Table } from "reactstrap";
import FilterOptions from "../../../../../components/filter/Filter";
import { ExportSvg, FilterSvg } from "../../../../../components/tablesComponents/tableSvgs";
import CustomSwitch from "../../../../../components/filter/CustomSwitch";
import { dateTypeOptions, timeOptions, tripsTypes } from "../data";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router";

const DailyTripPaymentTable = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  const navigate = useNavigate();
  const [tripsType, setTripsType] = useState("Online trips");
  const [time, setTime] = useState("morning");
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };
  const handleTimeChange = (e) => setTime(e.target.value);
  const TypeSwitch = () => (
    <div className="my-3">
      <CustomSwitch options={tripsTypes} active={tripsType} onChange={setTripsType} />
    </div>
  );
  const CustomTimeComponent = () =>
    time === "custom" ? (
      <div className="d-flex align-items-center mx-3">
        <div>
          <Input type="time" placeholder="hh/mm" />
        </div>
        <div className="mx-3">to</div>
        <div>
          <Input type="time" placeholder="hh/mm" />
        </div>
      </div>
    ) : null;

  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className={classNames("card-title")}>Trip Payment</span>
          <div className="cursor-pointer">
            <FilterOptions width={300} topComponent={<TypeSwitch />} bottomComponent={<CustomTimeComponent />} toggleComponent={<FilterSvg />} toggled={toggled} handleToggle={handleToggle} options={timeOptions} selectedOption={time} optionChange={handleTimeChange} name="trips_table_filter" />
            <ExportSvg />
          </div>
        </div>
        <div className="d-flex my-3">
          <small className="me-2 border px-2 border-success border-green" style={{ backgroundColor: "#f3fafb" }}>
            Trip type : {tripsType === "Online trips" ? "Online" : "Offline"}
          </small>
          <small className="me-2 border px-2 border-green" style={{ backgroundColor: "#f3fafb" }}>
            Date : {timeOptions.find((item) => item.value === time).label}
          </small>
        </div>
      </CardTitle>
      <div>
        <Table responsive className="cus-striped-table">
          <thead className="fw-normal">
            <tr>
              <th>Date and Time</th>
              <th> Trip Ref.</th>
              <th>Amount</th>
              <th>Discount</th>
              <th>Charged Amount</th>
              <th>Charged Date</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }).map((item, index) => (
              <tr key={index} className={classNames("cursor-pointer")} onClick={() => navigate("/finance/trip-payment/payment_id")}>
                <td>
                  <div>23rd Aug. 2022</div>
                  <div>2:00pm</div>
                </td>
                <td>1234567890123 </td>
                <td>15,000</td>
                <td>None </td>
                <td>15,000</td>
                <td>
                  <div>23rd Aug. 2022</div>
                  <div>2:00pm</div>
                </td>
                <td>Wallet</td>

                {/* remember to program the color based on the statuses
                successfull-text-green
                undecided -text-orange
                failed -text-red */}
                <td className=" fw-bold text-green">Successful</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-between">
          <span>Showing 24 of 120</span>
          <Pagination activePage={1} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={30} onChange={() => null} />
        </div>
      </div>
    </Card>
  );
};

export default DailyTripPaymentTable;
