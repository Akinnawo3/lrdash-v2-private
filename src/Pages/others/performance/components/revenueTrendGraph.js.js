import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import Chart from "chart.js/auto";

const RevenueTrendGraph = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("monthly");

  const handleDateTypeChange = (type) => setDateType(type)
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
        beginAtZero: true

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
        // label: "Monthly Downloads",
        data: [5, 1, 2, 6, 5, 13, 11],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 1,
        borderColor: "#03C2FE",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
      // {
      //   label: "Monthly Downloads",
      //   data: [2, 4, 7, 3, 6, 8, 6],
      //   fill: true,
      //   tension: 0,
      //   borderColor: "#01C7AB",
      // },
    ],
  };
  return (
    <Card body style={{ height: 335 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Revenue Trend</span>

          <Dropdown direction="top" className="d-inline" isOpen={toggled} toggle={handleToggle}>

            <DropdownToggle caret className="btn-sm p-0 text-muted px-1 border-white" style={{ backgroundColor: "white" }}>
              This week
            </DropdownToggle>
            <DropdownMenu>
              {dateType !== "This week" && <DropdownItem onClick={(e) => handleDateTypeChange("This year")}>This week</DropdownItem>}
              {dateType !== "This month" && <DropdownItem onClick={() => handleDateTypeChange("This month")}>This month</DropdownItem>}
              {dateType !== "Last 6 months" && <DropdownItem onClick={() => handleDateTypeChange("Last 6 months")}>Today</DropdownItem>}
              {dateType !== "All" && <DropdownItem onClick={() => handleDateTypeChange("All")}>All</DropdownItem>}
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardTitle>
      <div>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
};

export default RevenueTrendGraph;
