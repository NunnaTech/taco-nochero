import React, { useState } from "react";
import Chat from "./Chat";
import Notification from "./Notification";
import NotificationButton from "./NotificationButton";
import ChatButton from "./ChatButton";

export default function FloatingButtons() {
    const [stateNoti, setStateNoti] = useState(true);
    const [stateSms, setStateSms] = useState(true);
    const [messages, setMessages] = useState([
        <p className="bg-gray-200 w-2/3 rounded-md m-1 p-1" key="1">
            Hola, bienvenido(a) a Taco Nochero, estamos a tu dispocición si
            tienes alguna pregunta, no dudes en hacerlo
        </p>,
    ]);

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
            {!stateSms && <Chat messages={messages} setMessages={setMessages} />}
        </>
    );
}
