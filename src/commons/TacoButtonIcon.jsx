import React from "react";

export default function TacoButtonIcon({
    bgColor,
    callBack,
    Icon,
    disabled = false,
}) {
    bgColor = parseInt(bgColor);
    const textColor = bgColor >= 400 ? "text-white" : "text-black";
    bgColor = disabled ? bgColor + 1 : bgColor;
    const cursor = disabled
        ? "cursor-not-allowed"
        : `cursor-pointer active:bg-nochero-${bgColor + 1}`;
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
