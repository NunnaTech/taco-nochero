import React from "react";
import TacoButton from "../../commons/TacoButton";
const Menu = () => {
    return (
        <>
            <div className="navbar shadow-lg bg-neutral text-neutral-content rounded-box flex flex-row p-7 ">
                <div className="py-2">
                    <span className="text-lg font-bold text-white">
                        daisyUI
                    </span>
                </div>
                <div className="flex-none hidden px-2 mx-2 lg:flex md:flex space-x-3">
                    <TacoButton
                        bgColor="300"
                        moreClasses="font-semibold"
                        callBack={() => { }}
                        text="Iniciar sesión"
                    />
                    <TacoButton
                        bgColor="300"
                        moreClasses="font-semibold"
                        callBack={() => { }}
                        text="Iniciar sesión"
                    />
                    <TacoButton
                        bgColor="300"
                        moreClasses="font-semibold"
                        callBack={() => { }}
                        text="Iniciar sesión"
                    />
                    <TacoButton
                        bgColor="300"
                        moreClasses="font-semibold"
                        callBack={() => { }}
                        text="Iniciar sesión"
                    />
                </div>
                <div className="flex-1">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <span className="text-lg font-bold">
                        With two icons
                    </span>
                </div>
                <div className="flex-none">
                    <button class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </>

    )
}

export default Menu;