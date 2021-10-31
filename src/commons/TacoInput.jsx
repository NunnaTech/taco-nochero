import React from "react";

export default function TacoInput({
    id,
    placeholder,
    moreClasses,
    disabled = false,
    type,
    state,
    data,
    setData,
}) {
    let stroke = "";
    if (state === "correct") {
        stroke = "border-green-600";
    } else if (state === "error") {
        stroke = "border-red-600";
    }
    const myClass = `txt-nochero ${stroke} ${moreClasses}`;
    return (
        <input
            id={id}
            className={myClass}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={data}
            onChange={(e) => setData(e.target.value)}
        />
    );
}
