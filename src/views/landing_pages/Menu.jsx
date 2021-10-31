import React from "react";
import TacoButton from "../../commons/TacoButton";
import Logo from '../../assets/img/Taco logo.svg'
import {
    Link
} from "react-router-dom";
const Menu = () => {
    return (
        <>
            <div className="navbar shadow-lg bg-neutral text-neutral-content bg-opacity-100">
                <div className="flex-1 px-2 mx-2">
                    <button className="btn btn-square btn-ghost mx-4">
                        <img src={Logo} width="32" height="32" />
                    </button>
                    <span className="text-lg font-bold">
                        Taco nochero
                    </span>
                    <div className="mx-5">
                        <div className=" hidden lg:flex space-x-3">
                            <a href="#head ">
                                <TacoButton
                                    bgColor="400"
                                    moreClasses="font-semibold"
                                    callBack={() => { }}
                                    text="Home"
                                />
                            </a>
                            <a href="#body">
                                <TacoButton
                                    bgColor="400"
                                    moreClasses="font-semibold"
                                    callBack={() => { }}
                                    text="Paquetes"
                                />
                            </a>
                            <a href="#footer">
                                <TacoButton
                                    bgColor="400"
                                    moreClasses="font-semibold"
                                    callBack={() => { }}
                                    text="Contacto"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-none hidden lg:flex mx-4">
                    <Link to="/login">
                        <TacoButton
                            bgColor="400"
                            moreClasses="font-semibold"
                            callBack={() => {
                            
                            }}
                            text="Iniciar sesión"
                        />
                    </Link>
                </div>
            </div>
        </>

    )
}

export default Menu;