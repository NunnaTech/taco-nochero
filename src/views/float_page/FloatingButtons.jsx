import React from "react";
import Notifications from "./Notifications";
import Chat from "./Chat";

export default function FloatingButtons() {
    return (
        <div className="flex justify-end p-5">
            <div className="self-end fixed right-20 bottom-5">
                <Chat />
            </div>
            <div className="self-end fixed right-18 bottom-5">
                <Notifications />
            </div>
        </div>
    );
}
