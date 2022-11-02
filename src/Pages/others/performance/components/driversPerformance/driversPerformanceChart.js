import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Button,
  Card,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import Chart from "chart.js/auto";

import FilterOptions from "../../../../../components/filter/Filter";

const DriversPerformanceChart = ({
  loading,
  getDownloadsByDate,
  downloadsByDate,
}) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("This week");
  const [perfType, setPerfType] = useState("Overall Perf.");
  const [toggled, setToggled] = useState(false);
  const [perfToggled, setPerfToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  const handleDateTypeChange = (e) => setDateType(e.target.value);
  const handlePerfToggle = () => {
    setPerfToggled(!perfToggled);
  };
  const handlePerfTypeChange = (e) => setPerfType(e.target.value);
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "white",
        },
        beginAtZero: true,
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

  const dateTypeOption = [
    { value: "This week", label: "This week" },
    { value: "This month", label: "This month" },
    { value: "Last 6 months", label: "Last 6 months" },
  ];

  const perfTypeOptions = [
    { value: "Overall Perf.", label: "Overall Perf." },
    { value: "Service Perf.", label: "Service Perf." },
    { value: "Compliance Perf.", label: "Compliance Perf." },
  ];

  return (
    <Card body style={{ height: 335 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Drivers Performance</span>
          <span>
            <FilterOptions
              toggled={toggled}
              handleToggle={handleToggle}
              options={dateTypeOption}
              selectedOption={dateType}
              optionChange={handleDateTypeChange}
              name="trips"
            />

            <FilterOptions
              toggled={perfToggled}
              handleToggle={handlePerfToggle}
              options={perfTypeOptions}
              selectedOption={perfType}
              optionChange={handlePerfTypeChange}
              name="trips_perf_type"
            />
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
