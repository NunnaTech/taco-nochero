import React from "react";
import { MdShoppingBasket, MdDeliveryDining, MdFastfood } from "react-icons/md";

export default function Notification() {
    function Noti({ Icon, title, desc, time }) {
        return (
            <div className="flex items-center m-2 border border-gray-300 p-1 rounded-md">
                <div className="bg-nochero-401 p-3 rounded-full mr-3">
                    <Icon />
                </div>
                <div className="text-left flex-grow">
                    <p className="font-semibold">{title}</p>
                    <p className="">{desc}</p>
                </div>
                <p className="text-sm">{time}</p>
            </div>
        );
    }

    return (
        <div className="fixed bottom-28 -right-0">
            <div className="bg-gray-100 flex flex-wrap flex-col md:w-96 h-96 rounded-md border">
                <h2 className="h2-nochero text-center bg-nochero-300">
                    Notificaciones
                </h2>
                <div className="text-black text-center">
                    <Noti
                        Icon={() => <MdShoppingBasket size="30" />}
                        title="Nueva orden"
                        desc="Su orden ha sido tomada"
                        time="14 m"
                    />
                    <Noti
                        Icon={() => <MdDeliveryDining size="30" />}
                        title="Orden enviada"
                        desc="Su orden ha sido enviada"
                        time="10 m"
                    />
                    <Noti
                        Icon={() => <MdFastfood size="30" />}
                        title="Llegada"
                        desc="Su orden ha sido entregada"
                        time="9 m"
                    />
                </div>
            </div>
        </div>
    );
}
