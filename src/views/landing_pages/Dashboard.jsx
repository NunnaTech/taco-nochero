import React from "react";
import {
    MdPeopleAlt,
    MdShoppingCart,
    MdOutlineAttachMoney,
    MdDataExploration,
    MdHomeFilled,
    MdPerson,
    MdTableChart,
} from "react-icons/md";
import CardDashboard from "../../commons/CardDashboard";
import ChartDashboard from "../../commons/ChartDashboard";
import Logo from "../../assets/img/Taco logo.svg";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div className="w-full h-screen mx-auto text-white">
            <div className="flex justify-between place-content-center bg-gray-800 p-2 items-center">
                <div className="flex items-center">
                    <img src={Logo} alt="" className="w-10 h-10 mr-2" />
                    <p className="font-bold uppercase">Taco Nochero</p>
                </div>
                <div className="inline-flex">
                    <Link to="/taco-nochero">
                        <MdHomeFilled size="30" className="mr-3" />{" "}
                    </Link>
                    <Link to="/taco-nochero/table">
                        <MdTableChart size="30" className="mr-3" />{" "}
                    </Link>
                    <Link to="/taco-nochero/profile">
                        <MdPerson size="30" />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <CardDashboard
                        title="Clientes"
                        MainIcon={() => <MdPeopleAlt size="40" />}
                    />
                    <CardDashboard
                        title="Ordenes"
                        MainIcon={() => <MdShoppingCart size="40" />}
                    />
                    <CardDashboard
                        title="Ingresos"
                        MainIcon={() => <MdOutlineAttachMoney size="40" />}
                    />
                    <CardDashboard
                        title="Crecimiento"
                        MainIcon={() => <MdDataExploration size="40" />}
                    />
                </div>
                <ChartDashboard />
            </div>
            <div className="bg-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 p-5">
                    <div className="">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/23/Mexico_Map.svg"
                            alt="Mapa de México"
                            className="w-1/2 mx-auto"
                        />
                    </div>
                    <div className="p-5">
                        <h1 className="h1-nochero text-center">
                            Estados de más consumo del país
                        </h1>
                        <ol className="list-disc pl-10 p-nochero">
                            <li>Morelos</li>
                            <li>Baja California</li>
                            <li>Coahuila</li>
                            <li>Quintana Roo</li>
                            <li>Campeche</li>
                            <li>Yucatán</li>
                        </ol>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
