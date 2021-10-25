import React from "react";
import { MdNotifications, MdClose } from "react-icons/md";

export default function Notifications({
    stateNoti,
    setStateNoti,
    stateSms,
    setStateSms,
}) {
    return (
        <button
            className="w-14 h-14 rounded-full bg-nochero-300 flex justify-center items-center active:bg-nochero-301"
            onClick={() => {
                setStateNoti(!stateNoti);
                if(!stateSms)
                    setStateSms(true);
            }}
        >
            {stateNoti ? <MdNotifications size="30" /> : <MdClose size="40" />}
        </button>
    );
}
