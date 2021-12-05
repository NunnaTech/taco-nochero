import CartProduct from "./CartProduct";
import { info } from "./InfoShopping";

const CardShopping = () => {
    return (
        <div className="bg-gray-100">
            <div className="bg-gray-100 min-w-full max-w-6xl px-6 lg:px-6  mb-5">
                <div className="bg-white rounded px-2 py-0 flex flex-col shadow-xl">
                    <div className="card-body">
                        <h1 className="card-title h2-nochero text-gray-800">
                            Resumen de Artículos
                        </h1>
                        {info.map((p) => {
                            return (
                                <CartProduct
                                    key={p.Nombre}
                                    nombre={p.Nombre}
                                    precio={p.Precio}
                                    img={p.IMG}
                                    piezas={p.Piezas}
                                />
                            );
                        })}
                        <div className="divider pb-5 "></div>
                        <div className="card bg-gray-100 border-2 rounded mb-5 shadow-sm">
                            <div className="p-2 flex flex-row items-center justify-around ">
                                <div className="w-2/5 px-3 ">
                                    <h1 className="card-title h4-nochero mt-2 text-nochero-500">
                                        Cupón de Descuento:{" "}
                                    </h1>
                                </div>
                                <div className="w-3/5">
                                    <input
                                        className="w-11/12 text-nochero-500  border rounded-xl ml-1 py-3 px-4 text-xl uppercase"
                                        id="company"
                                        type="text"
                                        placeholder="AXF345"
                                    />
                                </div>
                            </div>
                            <div className="px-5 grid justify-items-end ">
                                <button className="btn w-full bg-nochero-400 border-none ">
                                    Aplicar
                                </button>
                            </div>
                            <div className="px-5">
                                <div className="-mx-3 md:flex mb-3">
                                    <div className="md:w-full px-3">
                                        <h1 className="card-title h4-nochero mt-5 text-nochero-500">
                                            Subtotal: $439.57
                                        </h1>
                                        <h1 className="card-title h4-nochero mt-5 text-nochero-500">
                                            IVA (16%): $83.72
                                        </h1>
                                        <h1 className="card-title h2-nochero mt-5 text-nochero-500">
                                            Total: $523.20
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardShopping;
