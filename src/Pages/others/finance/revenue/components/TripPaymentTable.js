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
    { value: "All", label: "all" },
    { value: "Best", label: "best" },
    { value: "Above Av.", label: "Above Av." },
    { value: "Below Av", label: "Below Av" },
    { value: "Poor", label: "Poor" },
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

                <td
                  className={`text-${performancePercentageColor(
                    Math.floor(Math.random() * 10) * 10
                  )}`}
                >
                  {Math.floor(Math.random() * 10) * 10}%
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Card>
  );
};

export default TripPaymentTable;
