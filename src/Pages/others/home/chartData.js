export const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    // datasets: [
    //     {
    //         label: "Transaction in Millions (#)",
    //         fill: true,
    //         lineTension: 0.5,
    //         backgroundColor: "rgba(75,192,192,0.4)",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: [0, 30, 50, 60, 70, 20, 40, 10, 40, 30, 30, 70],
    //     },
    //     {
    //         label: "Transaction in Millions (#)",
    //         fill: true,
    //         lineTension: 0.5,
    //         backgroundColor: "rgba(15,192,192,0.4)",
    //         borderColor: "rgba(75,192,192,1)",
    //         borderCapStyle: "butt",
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: "miter",
    //         pointBorderColor: "rgba(75,192,192,1)",
    //         pointBackgroundColor: "#fff",
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
    //         pointHoverBorderColor: "rgba(220,220,220,1)",
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: [0, 30, 50, 60, 90, 10, 40, 10, 90, 30, 0, 20],
    //     }
    // ],
    datasets: [
        {
            label: "Today",
            data: [0, 30, 50, 60, 70, 20, 40, 10, 40, 30, 30, 70],
            borderColor: "#3751FF",
            backgroundColor: "#3751FF",
            lineTension: 0.5,
            pointRadius: 0,
        },
        {
            label: "Yesterday",
            data: [0, 30, 50, 60, 90, 10, 40, 10, 90, 30, 0, 20],
            borderColor: "#DFE0EB",
            backgroundColor: "#9FA2B4",
            lineTension: 0.5,
            pointRadius: 0,
        }
    ]
};


export const lineOptions = {
    scales: {
        xAxes: [{
            // gridLines: {

            //     display: false,
            //     beginAtZero: false
            // },
            ticks: { display: false }
        }],
        yAxes: [{
            // stacked: true,
            gridLines: {
                // display: true,
            },
            ticks: {
                beginAtZero: false,
                reverse: true,
                // Return an empty string to draw the tick line but hide the tick label
                // Return `null` or `undefined` to hide the tick line entirely
                userCallback(value) {
                    // Convert the number to a string and splite the string every 3 charaters from the end
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);

                    // Convert the array to a string and format the output
                    value = value.join(",");
                    return `#${value}`;
                },
            },
        }],
    },

    legend: {
        display: false,
    },

    tooltips: {
        enabled: true,
    },
};