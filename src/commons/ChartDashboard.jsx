import React from "react";
import { Bar } from "react-chartjs-2";

export default function ChartDashboard() {
    let randomNumbers = [];
    for (let i = 0; i < 13; i++) {
        randomNumbers.push(Math.ceil(Math.random() * 500));
    }

    const data = {
        labels: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
        ],
        datasets: [
            {
                label: "# de ordendes vendidas",
                data: randomNumbers,
                backgroundColor: [
                    "rgb(255,160,0)",
                    "rgb(255,160,0)",
                    "rgb(255,160,0)",
                    "rgb(255,160,0)",
                    "rgb(255,160,0)",
                    "rgb(255,160,0)",
                    "rgb(255,160,0)",
                ],
            },
        ],
    };
    return <div><Bar data={data} /></div>;
}
