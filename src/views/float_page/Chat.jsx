import React from "react";
import { MdSend } from "react-icons/md";
import TacoInput from "../../commons/TacoInput";

export default function Chat() {
    return (
        <div className="fixed bottom-28 -right-0 md:-right-96">
            <div className="bg-gray-100 flex flex-wrap flex-col w-full md:w-1/2 h-96 rounded-md border">
                <h2 className="h2-nochero text-center bg-nochero-300">
                    ¿En que podemos ayudarte?
                </h2>
                <div className="text-black overflow-y-scroll flex-grow">
                    <div className="flex flex-wrap flex-col">
                        <p className="bg-gray-200 w-2/3 rounded-md m-1 p-1">
                            Hola, bienvenido(a) a Taco Nochero, estamos a tu
                            dispocición si tienes alguna pregunta, no dudes en
                            hacerlo
                        </p>
                        <p className="bg-blue-100 w-2/3 rounded-md m-1 p-1 self-end">
                            Muchas gracias buenos tacos
                        </p>
                    </div>
                </div>
                <div className="flex text-black p-2">
                    <TacoInput
                        placeholder="Escribe un mensaje..."
                        moreClasses=""
                    />
                    <button>
                        <MdSend size="30" />
                    </button>
                </div>
            </div>
        </div>
    );
}
