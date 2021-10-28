import React from "react";
import { MdShoppingBasket, MdDeliveryDining, MdFastfood } from "react-icons/md";

export default function Notification() {
    return (
        <div className="fixed bottom-28 -right-0">
            <div className="bg-gray-100 flex flex-wrap flex-col w-96 h-96 rounded-md border">
                <h2 className="h2-nochero text-center bg-nochero-300">
                    Notificaciones
                </h2>
                <div className="text-black text-center">
                    <div className="flex justify-between items-center m-2 border border-gray-300 p-1 rounded-md">
                        <div className="bg-nochero-401 p-3 rounded-full">
                            <MdShoppingBasket size="30" />
                        </div>
                        <div>
                            <p className="text-left font-semibold">
                                Nueva orden
                            </p>
                            <p className="text-left">Su orden ha sido tomada</p>
                        </div>
                        <p className="text-sm">14 m</p>
                    </div>
                    <div className="flex justify-between items-center m-2 border border-gray-300 p-1 rounded-md">
                        <div className="bg-nochero-401 p-3 rounded-full">
                            <MdDeliveryDining size="30" />
                        </div>
                        <div>
                            <p className="text-left font-semibold">
                                Orden enviada
                            </p>
                            <p className="text-left">Su orden ha sido enviada</p>
                        </div>
                        <p className="text-sm">7 m</p>
                    </div>
                    <div className="flex justify-between items-center m-2 border border-gray-300 p-1 rounded-md">
                        <div className="bg-nochero-401 p-3 rounded-full">
                            <MdFastfood size="30" />
                        </div>
                        <div>
                            <p className="text-left font-semibold">
                                Llegada
                            </p>
                            <p className="text-left">Su orden ha sido entregada</p>
                        </div>
                        <p className="text-sm">1 m</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
