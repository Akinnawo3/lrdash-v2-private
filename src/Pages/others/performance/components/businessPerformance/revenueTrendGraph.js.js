import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button, Card, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, FormGroup, Input, Label } from "reactstrap";
import Chart from "chart.js/auto";

const RevenueTrendGraph = ({ loading, getDownloadsByDate, downloadsByDate }) => {
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
    // labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satday"],


    datasets: [
      {
        label: "Revenue",
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
              {dateType}
            </DropdownToggle>
            <DropdownMenu className="px-2">
              <div className="mb-3"> <small className="fw-bold ms-4 ">Show for</small></div>

              <FormGroup check className="mb-3">
                <Input
                  name="dateType"
                  type="radio"
                  value={"This week"}
                  onChange={handleDateTypeChange}
                />
                <Label check>
                  This week
                </Label>
              </FormGroup>
              <FormGroup check className="mb-3">
                <Input
                  name="dateType"
                  type="radio"
                  value={"This month"}
                  onChange={handleDateTypeChange}

                />
                <Label check>
                  This month
                </Label>
              </FormGroup>
              <FormGroup check className="mb-3">
                <Input
                  name="dateType"
                  type="radio"
                  value={"This 6 months"}
                  onChange={handleDateTypeChange}
                />
                <Label check>
                  Last 6 months
                </Label>
              </FormGroup>
              {/* <Button className="btn-sm gradient-btn px-2 ms-3 mt-2">Apply</Button> */}
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
