import React from "react";

export default function TacoInput({
    placeholder,
    disabled = false,
    type,
    state,
    feedback,
}) {
    const stroke = state
        ? state === "correct"
            ? "border-green-600"
            : "border-red-600"
        : "";
    const myClass = `txt-nochero ${stroke}`;
    return (
        <>
            <input
                className={myClass}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
            {feedback&&<span className="ml-2 text-sm">{feedback}</span>}
        </>
    );
}
