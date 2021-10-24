import React from "react";
import TacoButton from "../../commons/TacoButton";
import Logo from '../../assets/img/Taco logo.svg'
const Menu = () => {
    return (
        <>
            <div className="navbar shadow-lg bg-neutral text-neutral-content bg-opacity-100">
                <div className="flex-1 px-2 mx-2">
                    <button className="btn btn-square btn-ghost mx-4">
                        <img src={Logo} width="32" height="32"/>
                    </button>
                    <span className="text-lg font-bold">
                        Taco nochero
                    </span>
                    <div className="mx-5">
                        <div className=" hidden lg:flex space-x-3">
                            <TacoButton
                                bgColor="400"
                                moreClasses="font-semibold"
                                callBack={() => { }}
                                text="Home"
                            />
                            <TacoButton
                                bgColor="400"
                                moreClasses="font-semibold"
                                callBack={() => { }}
                                text="Paquetes"
                            />
                            <TacoButton
                                bgColor="400"
                                moreClasses="font-semibold"
                                callBack={() => { }}
                                text="Contacto"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-none hidden lg:flex mx-4">
                    <TacoButton
                        bgColor="400"
                        moreClasses="font-semibold"
                        callBack={() => { }}
                        text="Iniciar sesión"
                    />
                </div>
            </div>
        </>

    )
}

export default Menu;