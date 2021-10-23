import React from "react";

export default function TacoButton({
    bgColor,
    text,
    moreClasses,
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
    const theClass = `btn-nochero bg-nochero-${bgColor} ${textColor} ${cursor} ${moreClasses}`;
    return (
        <button
            type="button"
            className={theClass}
            onClick={callBack}
            disabled={disabled}
        >
            {Icon && <Icon />}
            <span className="ml-2">{text}</span>
        </button>
    );
}
