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
// import DateTypeFilter from "./filters/DateTypeFilter";

const PaymentMethodTrend = ({
  loading,
  getDownloadsByDate,
  downloadsByDate,
}) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("This week");
  const [status, setStatus] = useState("Successfull");
  const [toggled, setToggled] = useState(false);
  const [statusToggled, setStatusToggled] = useState(false);
  const handleToggle = () => {
    setToggled((prevStatus) => !prevStatus);
  };
  const handleDateTypeChange = (e) => setDateType(e.target.value);

  const handleStatusToggled = () => {
    setStatusToggled((prevStatus) => !prevStatus);
  };
  const handleStatusChange = (e) => setStatus(e.target.value);
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
    { value: "Last 7 days", label: "Last 7 days" },
    { value: "This month", label: "This month" },
    { value: "Last 3 months", label: "Last 3 months" },
    { value: "All time", label: "All time" },
  ];
  return (
    <Card body style={{ height: 335 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Payment methods trend</span>
          <span>
            <FilterOptions
              toggled={toggled}
              handleToggle={handleToggle}
              options={dateTypeOption}
              selectedOption={dateType}
              optionChange={handleDateTypeChange}
              name="date-type"
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

export default PaymentMethodTrend;
