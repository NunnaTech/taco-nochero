import React from "react";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

export default function CardDashboard({ title, MainIcon }) {
    let quantity = Math.ceil(Math.random() * 100000);
    let percent = Math.ceil(Math.random() * 100);
    let ArrowIcon, color;
    if (percent > 50) {
        ArrowIcon = () => <MdArrowUpward />;
        color = "text-green-400";
    } else {
        ArrowIcon = () => <MdArrowDownward />;
        color = "text-red-600";
    }

    return (
        <div className="bg-gray-800 rounded-xl p-8">
            <div className="flex justify-between place-items-center">
                <div>
                    <h2 className="h3-nochero">{title}</h2>
                    <h3 className="h2-nochero">{quantity}</h3>
                </div>
                <div>
                    <MainIcon />
                </div>
            </div>
            <br />
            <div className={`flex self-end ${color}`}>
                <ArrowIcon />
                <p>{percent}% hace un momento</p>
            </div>
        </div>
    );
}
