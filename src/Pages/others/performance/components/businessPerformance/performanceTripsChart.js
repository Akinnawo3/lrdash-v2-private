import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import Chart from "chart.js/auto";
import DateTypeFilter from "../general/DateTypeFilter";

const PerformanceTripsChart = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("This week");
  const [toggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!toggled);
  };
  const handleDateTypeChange = (e) =>
    setDateType(e.target.value)
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
        borderColor: "#FE9603",
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
    <Card body style={{ height: 280 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Trips</span>

          <DateTypeFilter toggled={toggled} handleToggle={handleToggle} dateType={dateType} handleDateTypeChange={handleDateTypeChange}
            idPrefix="performance trips" />
        </div>
      </CardTitle>
      <div>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
};

export default PerformanceTripsChart;
;
