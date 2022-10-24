import React, { useContext, useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DriverTripsChart = ({ maxHeight, cutout }) => {
    //   const [dateType, setDateType] = useState("This week");
    //   const [toggled, setToggled] = useState(false);
    //   const handleToggle = () => {
    //     setToggled(!toggled);
    //   };
    //   const handleDateTypeChange = (type) => setDateType(type)


    //   const total = "70%";

    const data = {
        labels: ["Cancelled", "Completed"],

        datasets: [
            {
                // label: "Attendance for Week 1",
                clip: 15,
                data: [40, 75],
                borderColor: ["rgba(255,206,86,0.2)"],
                backgroundColor: ["#FF0000", "#00D2A8"],
                // borderColor: ["grey", "rgb(8,110,185)", "rgb(252,185,11)", "rgb(41,198,149)", "red"],
                pointBackgroundColor: "rgba(255,206,86,0.2)",
                borderJoinStyle: "round",
                spacing: -6,
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
        cutout: 41,
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
        <div>
            <div style={{ width: "100px", height: "100px", position: "relative" }} className="mx-auto">
                <Doughnut data={data} options={options} width={20} height={20} />
                {/* <Doughnut data={data} options={options} width={200} height={250} /> */}
                <div style={{ position: "absolute", width: "100%", top: "50%", left: 0, textAlign: "center", marginTop: "-10px", lineHeight: "20px" }}>
                    <div>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.91924 4.03609C2.51924 1.44109 6.42674 1.44109 7.01924 4.03609C7.37174 5.55859 6.40424 6.84859 5.56424 7.65109C4.94924 8.23609 3.98174 8.22859 3.36674 7.65109C2.53424 6.84859 1.56674 5.55859 1.91924 4.03609Z" stroke="#71939C" />
                            <path d="M11.6702 13.0361C12.2702 10.4411 16.2002 10.4411 16.8002 13.0361C17.1527 14.5586 16.1852 15.8486 15.3377 16.6511C14.7227 17.2361 13.7477 17.2286 13.1327 16.6511C12.2852 15.8486 11.3177 14.5586 11.6702 13.0361Z" stroke="#71939C" />
                            <path d="M9.36745 4.33594H11.3775C12.765 4.33594 13.41 6.05344 12.3675 6.96844L6.37495 12.2109C5.33245 13.1184 5.97745 14.8359 7.35745 14.8359H9.36745" stroke="#71939C" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.48197 4.71094H4.49064" stroke="#71939C" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.232 13.7109H14.2406" stroke="#71939C" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                {/* <div style={{position: "absolute", width: "100%", top: "90%", left: 0, textAlign: "center", marginTop: "-28px", lineHeight: "20px"}}>
          <h2 className="mb-0">{total}</h2>
        </div> */}
            </div>
            {/* <div className="my-3 fw-bold text-center text-muted"><span className="gradient-text">19.6m</span>/28m</div> */}
            {/* </CardBody> */}
        </div>
    );
};

export default DriverTripsChart;

// "react-chartjs-2": "^2.9.0",
