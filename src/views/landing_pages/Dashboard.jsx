import React from "react";
import { MdPeopleAlt, MdShoppingCart, MdOutlineAttachMoney, MdDataExploration } from "react-icons/md";
import CardDashboard from "../../commons/CardDashboard";

export default function Dashboard() {
    return (
        <div className="w-full h-screen mx-auto">
            <div className="grid grid-cols-2">
                <div className="grid grid-cols-2 gap-3">
                    <CardDashboard title="Clientes" MainIcon={() => <MdPeopleAlt size="40" />}/>
                    <CardDashboard title="Ordenes" MainIcon={() => <MdShoppingCart size="40" />}/>
                    <CardDashboard title="Ingresos" MainIcon={() => <MdOutlineAttachMoney size="40" />}/>
                    <CardDashboard title="Crecimiento" MainIcon={() => <MdDataExploration size="40" />}/>
                </div>
                <div>
                  
                </div>
            </div>
        </div>
    );
}
