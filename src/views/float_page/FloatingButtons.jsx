import React, { useState } from "react";
import Chat from "./Chat";
import Notification from "./Notification";
import NotificationButton from "./NotificationButton";
import ChatButton from "./ChatButton";

export default function FloatingButtons() {
    const [stateNoti, setStateNoti] = useState(false);
    const [stateSms, setStateSms] = useState(false);
    return (
        <>
            <div className="fixed right-10 bottom-5 text-white">
                <div className="flex justify-end">
                    <ChatButton 
                        stateSms={stateSms} 
                        setStateSms={setStateSms} 
                        stateNoti={stateNoti}
                        setStateNoti={setStateNoti}
                    />
                    <NotificationButton
                        stateNoti={stateNoti}
                        setStateNoti={setStateNoti}

                        stateSms={stateSms} 
                        setStateSms={setStateSms} 
                    />
                </div>
            </div>

            {!stateNoti && <Notification />}
            {!stateSms && <Chat />}
        </>
    );
}
