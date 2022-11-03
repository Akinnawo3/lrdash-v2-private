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

const PerformanceTable = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  const [currentFilterTab, setCurrentFilterTab] = useState("Overall");
  const [grade, setGrade] = useState("All");
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  const handleGradeChange = (e) => setGrade(e.target.value);
  const gradesOptions = [
    { label: "All", value: "all" },
    { label: "Best", value: "best" },
    { label: "Above Av.", value: "Above Av." },
    { label: "Below Av", value: "Below Av" },
    { label: "Poor", value: "Poor" },
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
              <th> Name</th>
              <th>Phone No</th>
              <th>Service</th>
              <th>Compliance</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }).map((item, index) => (
              <tr key={index}>
                <td>
                  <span className="">
                    <img
                      alt="thumbnail"
                      src="/images/avatar.png"
                      height={25}
                      width={22}
                      className="rounded-circle me-1"
                    />
                  </span>
                  Joanna Lane
                </td>
                <td>070 3397 6621 </td>
                <td>80%</td>
                <td>80%</td>
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

export default PerformanceTable;
