import React from "react";
import { info } from "./shopping_components/InfoShopping";
import CartProduct from "./shopping_components/CartProduct";
import TacoButton from "../../commons/TacoButton";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    return (
        <div className="mx-auto h-screen w-full">
            <div className="flex justify-center">
                <div className="bg-white card w-full md:w-2/4 text-center shadow-2xl">
                    <p className="h3-nochero text-center text-black mt-5">
                        Tu carrito
                    </p>
                    <div className="card-body">
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
                        <div className="justify-center card-actions">
                            <Link to="/taco-nochero/payment">
                                <TacoButton
                                    bgColor="400"
                                    text="Continuar"
                                    moreClasses="mr-24 ml-24"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
