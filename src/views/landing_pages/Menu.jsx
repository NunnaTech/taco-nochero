import React from "react";
import TacoButton from "../../commons/TacoButton";
const Menu = () => {
    return (
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost sm:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className="flex-1 px-2 mx-2">
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
    )
}

export default Menu;