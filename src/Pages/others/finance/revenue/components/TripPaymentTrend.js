import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from "reactstrap";
import Chart from "chart.js/auto";
import FilterOptions from "../../../../../components/filter/Filter";
import { dateTypeOptions, statusesOptions } from "../data";
// import DateTypeFilter from "./filters/DateTypeFilter";

const TripPaymentTrend = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("all_time");
  const [status, setStatus] = useState("success");
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
        label: "Online",
        data: [5, 1, 2, 6, 5, 13, 11],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#00D2A8",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
      {
        label: "Offline",
        data: [8, 3, 2, 9, 12, 5, 2],
        // fill: true,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 2,
        borderColor: "#1F2CA7",
        pointRadius: 0,
        // hoverBorderJoinStyle: "miter",
      },
    ],
  };

  const CustomDateComponent = () =>
    dateType === "custom" ? (
      <div className="d-flex align-items-center mx-2">
        <div>
          <Input className="px-2" type="date" placeholder="hh/mm" style={{ width: 132 }} />
        </div>
        <div className="mx-1">to</div>
        <div>
          <Input className="px-2" type="date" placeholder="hh/mm" style={{ width: 132 }} />
        </div>
      </div>
    ) : null;

  return (
    <Card body style={{ height: 300 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Trip Payment</span>
          <span>
            <FilterOptions  toggled={statusToggled} handleToggle={handleStatusToggled} options={statusesOptions} selectedOption={status} optionChange={handleStatusChange} name="status_b" />
            <FilterOptions width={325} toggled={toggled} handleToggle={handleToggle} bottomComponent={<CustomDateComponent />} options={dateTypeOptions} selectedOption={dateType} optionChange={handleDateTypeChange} name="date-type_b" />
          </span>
        </div>
      </CardTitle>
      <div>
        <Line data={data} options={options} height={130} />
      </div>
    </Card>
  );
};

export default TripPaymentTrend;
