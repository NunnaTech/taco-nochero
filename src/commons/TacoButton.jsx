import React from "react";

export default function TacoButton({
    bgColor,
    textColor = "text-black",
    text,
    callBack,
    Icon,
    disabled = false,
}) {
    bgColor = parseInt(bgColor);
    bgColor = disabled ? bgColor + 1 : bgColor;
    const cursor = disabled ? 'cursor-not-allowed': 'cursor-pointer';
    const theClass = `btn-nochero bg-nochero-${bgColor} ${textColor} ${cursor}`;
    return (
        <button type="button" className={theClass} onClick={callBack} disabled={disabled}>
            <Icon />
            <span className='ml-2'>{text}</span>
        </button>
    );
}
