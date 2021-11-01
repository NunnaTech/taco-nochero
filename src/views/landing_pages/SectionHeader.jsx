import React from "react";
import TacoButton from "../../commons/TacoButton";
import Logo2 from '../../assets/img/logo 2.png'
import {
    Link
} from "react-router-dom";
const SectionHeader = () => {
    return (

        <div id="head" className="hero min-h-screen " style={{ backgroundImage: "url('https://s1.1zoom.me/big0/932/Fast_food_Pancake_Meat_460368.jpg')", backgroundAttachment: "fixed" }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="text-center hero-content text-neutral-content">
                <div className="max-w-md">

                    <p className="text-4xl">
                        Bienvenido a
                    </p>
                    <img src={Logo2} width="512" height="512" />
                    <div className="py-10">
                        <Link to="/register">
                            <TacoButton
                                bgColor="400"
                                moreClasses="font-semibold"
                                callBack={() => { }}
                                text="¡Registrate!"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHeader;