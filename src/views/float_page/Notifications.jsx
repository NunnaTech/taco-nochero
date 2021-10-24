import React, { useState } from "react";
import { MdNotifications, MdClose } from "react-icons/md";

// Falta acabar
export default function Notifications() {
    const [active, setActive] = useState(false);
    return (
        <button
            className="w-14 h-14 rounded-full bg-nochero-300 text-white flex justify-center items-center active:bg-nochero-301"
            onClick={() => setActive(!active)}
        >
            {active ? <MdNotifications size="30" /> : <MdClose size="40" />}
        </button>
    );
}
