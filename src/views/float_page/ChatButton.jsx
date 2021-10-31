import React from "react";
import { MdMessage, MdClose } from "react-icons/md";

export default function Chat({
    stateSms,
    setStateSms,
    stateNoti,
    setStateNoti,
}) {
    
    return (
        <button
            className="w-14 h-14 rounded-full bg-nochero-300 flex justify-center items-center active:bg-nochero-301 mr-5"
            onClick={() => {
                setStateSms(!stateSms);
                if(!stateNoti)
                    setStateNoti(true);
            }}
        >
            {stateSms ? <MdMessage size="30" /> : <MdClose size="40" />}
        </button>
    );
}
