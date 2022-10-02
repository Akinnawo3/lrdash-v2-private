import React, {useContext, useState, useEffect} from "react";
import {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from "reactstrap";
import {Doughnut} from "react-chartjs-2";
import Chart from "chart.js/auto";

const DougnutProjection = ({maxHeight, cutout}) => {
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
        label: "Attendance for Week 1",
        clip: 15,
        data: [35, 70],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: ["rgb(227,233,235)", "rgb(1,199,171)"],
        // borderColor: ["grey", "rgb(8,110,185)", "rgb(252,185,11)", "rgb(41,198,149)", "red"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
        borderJoinStyle: "round",
        borderRadius: [
          {
            outerStart: -5, //negative margin didint work. look for solution
            outerEnd: -5,
            innerStart: -8,
            innerEnd: -5,
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
    cutout: 62,
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
    <Card body style={{height: 278}}>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span>Projection covered</span>
        </div>
        {/* <span>Today</span> */}
      </CardTitle>
      {/* <CardBody className=""> */}
      <div style={{width: "150px", height: "150px", position: "relative"}} className="mx-auto">
        <Doughnut data={data} options={options} width={60} height={60} />
        {/* <Doughnut data={data} options={options} width={200} height={250} /> */}
        <div style={{position: "absolute", width: "100%", top: "53%", left: 0, textAlign: "center", marginTop: "-28px", lineHeight: "20px"}}>
          <h2 className="mb-0">{total}</h2>
        </div>
        {/* <div style={{position: "absolute", width: "100%", top: "90%", left: 0, textAlign: "center", marginTop: "-28px", lineHeight: "20px"}}>
          <h2 className="mb-0">{total}</h2>
        </div> */}
      </div>
      <div className="my-3 fw-bold text-center gradient-text">19.6m/28m</div>
      {/* </CardBody> */}
    </Card>
  );
};

export default DougnutProjection;

// "react-chartjs-2": "^2.9.0",
