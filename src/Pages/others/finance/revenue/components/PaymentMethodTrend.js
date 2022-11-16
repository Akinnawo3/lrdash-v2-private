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
  const [dateType, setDateType] = useState("this_week");
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
        ticks: {
          min: 0,
          max: 15,
          stepSize: 5,
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
        label: "Wallet",
        data: [5, 1, 2, 6, 5, 13, 11],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#00997A",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
      {
        label: "Cash",
        data: [8, 3, 2, 9, 12, 5, 2],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#1F2CA7",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
      {
        label: "Transfer",
        data: [2, 5, 9, 4, 1, 5, 3],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#62007A",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
    ],
  };

  const statusesOptions = [
    { value: "all", label: "All Statuses" },
    { value: "success", label: "Successful" },
    { value: "undecided", label: "Undecided" },
    { value: "failed", label: "Failed" },
  ];
  const dateTypeOption = [
    { value: "Last 7 days", label: "Last 7 days" },
    { value: "This month", label: "This month" },
    { value: "Last 3 months", label: "Last 3 months" },
    { value: "All time", label: "All time" },
  ];
  return (
    <Card body style={{ height: 300 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Payment methods trend</span>
          <span>
            <FilterOptions
              toggled={statusToggled}
              handleToggle={handleStatusToggled}
              options={statusesOptions}
              selectedOption={status}
              optionChange={handleStatusChange}
              name="status"
            />
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
        <Line data={data} options={options} height={130}/>
      </div>
    </Card>
  );
};

export default PaymentMethodTrend;
