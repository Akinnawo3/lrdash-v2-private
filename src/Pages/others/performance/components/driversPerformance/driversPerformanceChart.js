import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import Chart from "chart.js/auto";
import DateTypeFilter from "../general/DateTypeFilter";

const DriversPerformanceChart = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("This week");
  const [perfType, setPerfType] = useState("Overall Perf.");
  const [toggled, setToggled] = useState(false);
  const [perfToggled, setPerfToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  const handleDateTypeChange = (type) => setDateType(type)
  const handlePerfToggle = () => {
    setPerfToggled(!perfToggled);
  };
  const handlePerfTypeTypeChange = (type) => setPerfType(type)
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "white",
        },
        beginAtZero: true
      },
      y: {
        grid: {
          display: false,
          borderColor: "white",
        },
        beginAtZero: true,
        // steps: 4


      },
    },

    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
  };
  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],

    datasets: [
      {
        label: "BestBest (> 80%) ",
        data: [5, 1, 2, 6, 5, 13, 11],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#00D2A8",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
      {
        label: "Above av. (51-80%)",
        data: [8, 3, 2, 9, 12, 5, 2],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#03C2FE",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
      {
        label: "Below av. (30-50%)",
        data: [2, 5, 9, 4, 1, 5, 3],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#FE9603",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
      {
        label: "Poor (< 30%)",
        data: [9, 2, 1, 8, 3, 9, 7],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#FF3739",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },


    ],
  };
  return (
    <Card body style={{ height: 335 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Drivers Performance</span>
          <span>

            <DateTypeFilter toggled={toggled} handleToggle={handleToggle} dateType={dateType} handleDateTypeChange={handleDateTypeChange}
              idPrefix="driver perf chart " />



            <Dropdown direction="top" className="d-inline" isOpen={perfToggled} toggle={handlePerfToggle}>
              <DropdownToggle caret className="btn-sm p-0 text-muted px-1 border-white" style={{ backgroundColor: "white" }}>
                {perfType}
              </DropdownToggle>
              <DropdownMenu>
                {dateType !== "Overall Perf." && <DropdownItem onClick={(e) => handlePerfTypeTypeChange("This week")}>Overall Perf.</DropdownItem>}
                {dateType !== "Service Perf." && <DropdownItem onClick={() => handlePerfTypeTypeChange("This month")}>Service Perf.</DropdownItem>}
                {dateType !== "Compliance Perf" && <DropdownItem onClick={() => handlePerfTypeTypeChange("Last 6 months")}>Compliance Perf.</DropdownItem>}
                {/* <Button className="btn-sm gradient-btn px-2 ms-3 mt-2">Apply</Button> */}
              </DropdownMenu>
            </Dropdown>
          </span>
        </div>
      </CardTitle>
      <div>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
};

export default DriversPerformanceChart;
;