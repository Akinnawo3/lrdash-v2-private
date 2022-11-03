import { TableCell, TableRow, TableBody, TableHead } from "@material-ui/core";
import classNames from "classnames";
// import {TableCell, TableRow,TableBody,TableHead} from "reactstrap";
import React, { Fragment, useEffect, useState } from "react";
import { BsFileEarmarkArrowUp } from "react-icons/bs";

import { Card, CardTitle, Table } from "reactstrap";
import FilterOptions from "../../../../../components/filter/Filter";
import {
  ExportSvg,
  FilterSvg,
} from "../../../../../components/tablesComponents/tableSvgs";
import { performancePercentageColor } from "../../../../../helpers/colorsHelper";

const TripPaymentTable = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  const [currentFilterTab, setCurrentFilterTab] = useState("Overall");
  const [grade, setGrade] = useState("All");
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  const handleGradeChange = (e) => setGrade(e.target.value);
  const gradesOptions = [
    { label: "All time", value: "all_time" },
    { label: "Last 7 days", value: "last 7 days" },
    { label: "This month", value: "this month" },
    { label: "Last 3 months", value: "last 3 months" },
    { label: "Custom date range", value: "custom" },
  ];
  const filterTabs = ["Overall", "Service", "Compliance"];

  const FilterTabs = () => (
    <div className="my-3 d-flex justify-content-between">
      {filterTabs.map((item) => (
        <small
          key={item}
          className={classNames("gradient-btn px-3 text-white py-1")}
          onClick={() => setCurrentFilterTab(item)}
          style={{ borderRadius: 16 }}
        >
          {item}
        </small>
      ))}
    </div>
  );

  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span>Showing 24 riders</span>
          <div className="cursor-pointer">
            <FilterOptions
              width={320}
              topComponent={<FilterTabs />}
              toggleComponent={<FilterSvg />}
              toggled={toggled}
              handleToggle={handleToggle}
              options={gradesOptions}
              selectedOption={grade}
              optionChange={handleGradeChange}
              name="perf_table_filter"
            />
            <ExportSvg />
          </div>
        </div>
        {/* <span>Today</span> */}
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
              <tr key={index}>
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
      </div>
    </Card>
  );
};

export default TripPaymentTable;
