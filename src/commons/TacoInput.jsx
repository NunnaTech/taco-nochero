import React from "react";

export default function TacoInput({
    id,
    placeholder,
    moreClasses,
    disabled = false,
    type,
    state,
}) {
    const stroke = state
        ? state === "correct"
            ? "border-green-600"
            : "border-red-600"
        : "";
    const myClass = `txt-nochero ${stroke} ${moreClasses}`;
    return (
        <input
            id={id}
            className={myClass}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
}
