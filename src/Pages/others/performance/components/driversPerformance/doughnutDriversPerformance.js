import React, { useContext, useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DoughnutDriversPerformance = ({ maxHeight, cutout }) => {
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


  const labels = [
    {
      title: "Concurrent amount",
      color: "rgb(8,110,185)",
    },
    {
      title: "Projection",
      color: "grey",
    },
  ];

  const total = "70%";

  const data = {
    labels: ["Projection", "Concurrent amount"],

    datasets: [
      {
        label: "Best",
        clip: 15,
        data: [35, 70, 50, 45],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: ["#00D2A8", "#FE9603", "#03C2FE", "#FF3739"],
        // borderColor: ["grey", "rgb(8,110,185)", "rgb(252,185,11)", "rgb(41,198,149)", "red"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        borderJoinStyle: "round",

        spacing: -20,
        borderAlign: "center",
        borderRadius: [

          {
            outerStart: 8,
            outerEnd: 8,
            innerStart: 8,
            innerEnd: 8,
          },
          {
            outerStart: 8,
            outerEnd: 8,
            innerStart: 8,
            innerEnd: 8,
          },
          {
            outerStart: 8,
            outerEnd: 8,
            innerStart: 8,
            innerEnd: 8,
          },
          {
            outerStart: 8,
            outerEnd: 8,
            innerStart: 8,
            innerEnd: 8,
          },
        ],
      },
    ],
    text: "83%",
  };

  // const option = {
  //   maintainAspectRatio: false,
  //   responsive: false,
  //   legend: {
  //     position: "left",
  //     labels: {
  //       boxWidth: 10,
  //     },
  //   },
  // };
  const options = {
    cutout: 66,
    plugins: {
      legend: {
        labels: {
          boxWidth: 10,
        },
        display: false,
        position: "bottom",
        align: "center",
      },
      title: {
        display: false,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 50,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };
  // const options = {
  //   cutoutPercentage: 80,
  //   legend: {
  //     labels: {
  //       boxWidth: 10,
  //     },
  //     display: true,
  //     position: "bottom",
  //     align: "left",
  //     // legendDistance: {
  //     //   padding: 130, // dictates the space
  //     // },
  //   },
  //   plugins: {
  //     title: {
  //       display: false,
  //       text: "Doughnut Chart",
  //       color: "blue",
  //       font: {
  //         size: 50,
  //       },
  //       padding: {
  //         top: 30,
  //         bottom: 30,
  //       },
  //       responsive: true,
  //       animation: {
  //         animateScale: true,
  //       },
  //     },
  //   },
  // };

  return (
    <Card body style={{ height: 335 }}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span className="fw-bold">Perf</span>

          <span>

            <Dropdown direction="top" className="d-inline me-1" isOpen={toggled} toggle={handleToggle}>

              <DropdownToggle caret className="btn-sm p-0 text-muted px-1 border-white" style={{ backgroundColor: "white" }}>
                {dateType}
              </DropdownToggle>
              <DropdownMenu>
                {dateType !== "This week" && <DropdownItem onClick={(e) => handleDateTypeChange("This week")}>This week</DropdownItem>}
                {dateType !== "This month" && <DropdownItem onClick={() => handleDateTypeChange("This month")}>This month</DropdownItem>}
                {dateType !== "Last 6 months" && <DropdownItem onClick={() => handleDateTypeChange("Last 6 months")}>Last 6 months</DropdownItem>}
                {/* <Button className="btn-sm gradient-btn px-2 ms-3 mt-2">Apply</Button> */}
              </DropdownMenu>
            </Dropdown>
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
        {/* <span>Today</span> */}
      </CardTitle>
      {/* <CardBody className=""> */}
      <div style={{ width: "150px", height: "150px", position: "relative" }} className="mx-auto">
        <Doughnut data={data} options={options} width={70} height={70} />
        {/* <Doughnut data={data} options={options} width={200} height={250} /> */}
        {/* <div style={{ position: "absolute", width: "100%", top: "50%", left: 0, textAlign: "center", marginTop: "-28px", lineHeight: "20px" }}>
          <h2 className="mb-0 fw-bold">{total}</h2>
          <small className="gradient-text fw-bold">+34%</small>
        </div> */}
        {/* <div style={{position: "absolute", width: "100%", top: "90%", left: 0, textAlign: "center", marginTop: "-28px", lineHeight: "20px"}}>
          <h2 className="mb-0">{total}</h2>
        </div> */}
      </div>
      <div className="my-3 text-muted mx-4 mb-2">
        <div className="d-flex">
          <div className="w-50">
            <div className="text-green">Best</div>
            <div>60%</div>
          </div>
          <div className="w-50 ms-4">
            <div className="text-blue">Above Av.</div>
            <div>20%</div>
          </div>
        </div>
        <div className="d-flex mt-2 ">
          <div className="w-50">
            <div className="text-orange">Below Av.</div>
            <div>10%</div>
          </div>
          <div className="ms-4 w-50">
            <div className="text-red ">Poor</div>
            <div>10%</div>
          </div>
        </div>

      </div>
      {/* </CardBody> */}
    </Card>
  );
};

export default DoughnutDriversPerformance;

// "react-chartjs-2": "^2.9.0",
