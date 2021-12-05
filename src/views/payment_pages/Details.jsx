export default function Details() {
    return (
        <div className="bg-gray-100 flex">
            <div className="bg-gray-100 min-w-full max-w-6xl px-6 lg:px-6  mb-5">
                <div className="bg-white rounded px-10 py-8  flex flex-col shadow-xl">
                    <h1 className="card-title h2-nochero text-gray-800">
                        Resumen de Orden
                    </h1>
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <h1 className="card-title h4-nochero mt-5 text-nochero-500 ">
                                Subtotal: $439.57
                            </h1>
                            <h1 className="card-title h4-nochero mt-5 text-nochero-500 ">
                                IVA (16%): $83.72
                            </h1>
                            <h1 className="card-title h2-nochero mt-5 text-nochero-500 ">
                                Total: $523.20
                            </h1>
                        </div>
                    </div>
                    <div className="form-control max-w-max">
                        <label className="cursor-pointer label">
                            <span className="text-gray-600 text-lg mr-5">
                                Deseo Facturar
                            </span>
                            <input
                                type="radio"
                                name="opt"
                                className="radio bg-white border-gray-400 border-2 hover:bg-nochero-400 focus:bg-nochero-400"
                                value=""
                            />
                        </label>
                    </div>
                    <h1 className="card-title h4-nochero mt-5  text-gray-600">
                        El costo del envío se mostrará más adelante
                    </h1>
                </div>
            </div>
        </div>
    );
}
