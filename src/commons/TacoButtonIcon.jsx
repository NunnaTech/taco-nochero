import React from "react";

export default function TacoButtonIcon({
    bgColor,
    callBack,
    textColor="text-black",
    Icon,
    disabled = false,
}) {
    bgColor = parseInt(bgColor);
    bgColor = disabled ? bgColor + 1 : bgColor;
    const cursor = disabled ? "cursor-not-allowed" : "cursor-pointer";
    const theClass = `btn-nochero-icon bg-nochero-${bgColor} ${textColor} ${cursor}`;
    return (
        <button
            type="button"
            className={theClass}
            onClick={callBack}
            disabled={disabled}
        >
            <Icon />
        </button>
    );
}
