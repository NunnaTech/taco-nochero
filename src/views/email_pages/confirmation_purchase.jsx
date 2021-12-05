import Logo from "../../../src/assets/images/FullLogo.png";
import { MdInfo } from "react-icons/md";

export default function ConfirmationPurchase() {
    return (
        <div className="bg-gray-300 mx-auto max-w-5xl  rounded py-6 px-4 lg:px-6 shadow-xl mb-24">
            <div className="min-w-full max-w-6xl bg-gray-100 rounded px-5 py-8">
                <div className="bg-nochero-500 rounded-t-lg pt-2 pb-6  flex justify-center">
                    <img
                        src={Logo}
                        alt="..."
                        className="max-w-full align-middle object-contain h-28"
                    />
                </div>
                <div className="bg-white rounded px-10 py-8  flex flex-col shadow-xl">
                    <h1 className="text-gray-800 text-3xl">
                        <b>Hola</b>, Luis Álvarez
                    </h1>
                    <div className="md:w-full my-5">
                        <p className="text-gray-800 text-lg ">
                            Tu compra ha sido realizada correctamente, te
                            compartimos los detalles:
                        </p>
                    </div>
                    <div className="card bg-gray-100 border-2 py-8 rounded mb-5 shadow flex justify-center">
                        <div className="flex flex-row justify-around items-center ">
                            <div className="w-4/6">
                                <h1 className="text-gray-800 text-xl my-2">
                                    <b>Pedido #:</b> 422-532
                                </h1>
                                <h1 className="text-gray-800 text-xl my-2">
                                    <b>Pago:</b> VISA 4234
                                </h1>
                                <h1 className="text-gray-800 text-xl my-2">
                                    <b>Importe Total:</b> $2,400.00
                                </h1>
                                <h1 className="text-gray-800 text-xl my-2">
                                    <b>Fecha:</b> 23/08/21
                                </h1>
                                <h1 className="h4-nochero card-title text-gray-800 mt-5">
                                    ¡Muchas gracias por tu compra!
                                </h1>
                                <h1 className="h4-nochero card-title text-nochero-400 mt-5">
                                    Productos:
                                </h1>
                            </div>
                            <MdInfo size="50" className="mr-3 text-blue-500" />
                        </div>
                        <div className="my-4 mx-8 bg-white  rounded shadow-lg ">
                            <ul className="divide-y-4 divide-gray-100 px-5">
                                <li className="p-3 text-nochero-500 hover:bg-blue-600 hover:text-blue-200 flex justify-between">
                                    <h1 className="font-bold">Descripción</h1>
                                    <h1 className="font-bold">Total</h1>
                                </li>
                                <li className="p-3 text-nochero-500 hover:bg-blue-600 hover:text-blue-200 flex justify-between">
                                    <h1>3 x Torta Cubana de renito</h1>
                                    <h1>$120.00</h1>
                                </li>
                                <li className="p-3 text-nochero-500 hover:bg-blue-600 hover:text-blue-200 flex justify-between">
                                    <h1>3 x Refresco Coca-Cola</h1>
                                    <h1>$60.00</h1>
                                </li>
                                <li className="p-3 text-nochero-500 hover:bg-blue-600 hover:text-blue-200 flex justify-between">
                                    <h1>1 x Orden Tacos al Pastor</h1>
                                    <h1>$70.00</h1>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-nochero-500 py-6 rounded-b-lg  flex justify-center">
                    <p className="p-nochero">
                        {" "}
                        Por favor, no respondas a este correo
                    </p>
                </div>
            </div>
        </div>
    );
}
