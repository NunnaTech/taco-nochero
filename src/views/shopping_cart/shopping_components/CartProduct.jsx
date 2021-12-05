import { useState } from "react";

const CartProduct = ({ nombre, precio, img, piezas }) => {
    const [pza, setPza] = useState(piezas);

    const sumar = () => {
        setPza(pza + 1);
    };
    const restar = () => {
        if (pza == 0) {
            console.log("");
        } else {
            setPza(pza - 1);
        }
    };

    return (
        <div className="card bg-gray-100 border-2 rounded mb-5 shadow-sm">
            <div className="card-body">
                <div className="grid grid-cols-2">
                    <div>
                        <img src={img} className="bg-cover rounded mx-auto" />
                    </div>
                    <div className="flex flex-col">
                        <div className=" grid justify-start justify-items-start">
                            <h1 className="font-bold text-black text-base">
                                {nombre}
                            </h1>
                            <h1 className="font-regular text-black text-base">
                                {pza} pieza(s)
                            </h1>
                            <div className="grid grid-cols-3 mt-2">
                                <button
                                    className="btn bg-nochero-400 hover:bg-nochero-300 border-0 btn-sm mr-6"
                                    onClick={() => sumar()}
                                >
                                    +
                                </button>
                                <button
                                    className="btn bg-nochero-500 hover:bg-gray-700 btn-sm mr-6"
                                    onClick={() => restar()}
                                >
                                    -
                                </button>
                                <h1 className="font-bold text-black text-lg mr-3">
                                    ${precio}
                                </h1>
                            </div>
                        </div>
                        <div className="grid place-items-end">
                            <a className="font-light btn btn-ghost no-animation btn-sm text-red-500 text-base mr-3 mt-2 hover:text-red-600 transform hover:scale-150 motion-reduce:transform-none">
                                Eliminar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
