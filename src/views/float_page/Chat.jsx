import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import TacoInput from "../../commons/TacoInput";

export default function Chat({ messages, setMessages }) {
    const [message, setMessage] = useState("");

    const pushMessage = () => {
        if (message !== "") {
            setMessages([
                [
                    ...messages,
                    <p
                        className="bg-blue-100 w-2/3 rounded-md m-1 p-1 self-end"
                        key={message}
                    >
                        {message}
                    </p>,
                ],
            ]);
            setMessage("");
        }
    };

    return (
        <div className="fixed bottom-28 -right-0 md:-right-96">
            <div className="bg-gray-100 flex flex-wrap flex-col w-full md:w-1/2 h-96 rounded-md border">
                <h2 className="h2-nochero text-center bg-nochero-300">
                    ¿En que podemos ayudarte?
                </h2>
                <div className="text-black overflow-y-scroll h-4/6">
                    <div className="flex flex-wrap flex-col">{messages}</div>
                </div>
                <div className="flex text-black p-2">
                    <TacoInput
                        id="txtOnChat"
                        placeholder="Escribe un mensaje..."
                        moreClasses=""
                        data={message}
                        setData={setMessage}
                    />
                    <button
                        className="active:bg-gray-300 p-1 rounded-md"
                        onClick={pushMessage}
                    >
                        <MdSend size="30" />
                    </button>
                </div>
            </div>
        </div>
    );
}
