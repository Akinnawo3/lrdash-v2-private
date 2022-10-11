import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {Card, CardTitle} from "reactstrap";
import Chart from "chart.js/auto";

const DailyTripsGraph = ({loading, getDownloadsByDate, downloadsByDate}) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("monthly");
  const options = {
    options: {
      scales: {
        x: {
          grid: {
            // show: false,
            color: "#f9f",
          },
        },
        y: {
          grid: {
            // display: false,
            color: "#f9f",
          },
        },
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
        label: "Monthly Downloads",
        data: [2, 4, 7, 3, 6, 8, 6],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderWidth: 1,
        borderColor: "rgba(75,192,192,1)",
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
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span></span>
          <span>Daily trips this week</span>
        </div>
        {/* <span>Today</span> */}
      </CardTitle>
      <div>
        <Line data={data} options={options} />
      </div>
    </Card>
  );
};

export default DailyTripsGraph;