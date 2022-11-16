import { TableCell, TableRow, TableBody, TableHead } from "@material-ui/core";
import classNames from "classnames";
// import {TableCell, TableRow,TableBody,TableHead} from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

import { Card, CardTitle, Table } from "reactstrap";
import FilterOptions from "../../../../../components/filter/Filter";
import { ExportSvg, FilterSvg } from "../../../../../components/tablesComponents/tableSvgs";
import CustomSwitch from "../../../../../components/filter/CustomSwitch";
import { dateTypeOptions, tripsTypes } from "../data";
import Pagination from "react-js-pagination";
import { useNavigate } from "react-router";

const DailyTripPaymentTable = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  const navigate = useNavigate();
  const [tripsType, setTripsType] = useState("Online trips");
  const [dateType, setDateType] = useState("all_time");
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };
  const handleDateTypeChange = (e) => setDateType(e.target.value);
  const TypeSwitch = () => (
    <div className="my-3">
      <CustomSwitch options={tripsTypes} active={tripsType} onChange={setTripsType} />
    </div>
  );

  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Trip Payment</span>
          <div className="cursor-pointer">
            <FilterOptions width={300} topComponent={<TypeSwitch />} toggleComponent={<FilterSvg />} toggled={toggled} handleToggle={handleToggle} options={dateTypeOptions} selectedOption={dateType} optionChange={handleDateTypeChange} name="perf_table_filter" />
            <ExportSvg />
          </div>
        </div>
        <div className="d-flex my-3">
          <small className="me-2 border px-2 border-success border-green" style={{ backgroundColor: "#f3fafb" }}>
            Trip type : {tripsType === "Online trips" ? "Online" : "Offline"}
          </small>
          <small className="me-2 border px-2 border-green" style={{ backgroundColor: "#f3fafb" }}>
            Date : {dateTypeOptions.find((item) => item.value === dateType).label}
          </small>
        </div>
      </CardTitle>
      <div>
        <Table responsive className="cus-striped-table">
          <thead className="fw-normal">
            <tr>
              <th> </th>
              <th className="text-green text-center" colSpan={2}>
                Successful
              </th>
              <th className="text-orange text-center" colSpan={2}>
                Undecided
              </th>
              <th className="text-red text-center" colSpan={2}>
                Failed
              </th>
            </tr>
            <tr>
              <th> Date</th>
              <th> Amount</th>
              <th>No. of Trips</th>
              <th>Amount</th>
              <th>No. of Trips</th>
              <th>Amount</th>
              <th>No. of Trips</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }).map((item, index) => (
              <tr key={index} onClick={() => navigate("/finance/revenue/particular_date")}>
                <td>23rd Aug. 2022</td>
                <td>20,235,844 </td>
                <td>43</td>
                <td>20,235,844 </td>
                <td>43</td>
                <td>20,235,844 </td>
                <td>43</td>
                <td>4,783,845</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-between">
          <span>Showing 24 riders</span>
          <Pagination activePage={1} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={30} onChange={() => null} />
        </div>
      </div>
    </Card>
  );
};


export default DailyTripPaymentTable