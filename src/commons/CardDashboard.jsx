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
        <div className="text-white bg-gray-800 rounded-xl p-2">
            <div className="flex justify-between place-items-center">
                <div>
                    <p className="p-nochero font-semibold">{title}</p>
                    <h3 className="h3-nochero">{quantity}</h3>
                </div>
                <div>
                    <MainIcon />
                </div>
            </div>
            <br />
            <div className={`flex self-end ${color}`}>
                <ArrowIcon />
                <p className="text-sm">{percent}% hace un momento</p>
            </div>
        </div>
    );
}
