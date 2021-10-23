import React from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    return (
        <div className="w-full h-screen mx-auto flex justify-center place-items-center">
            <div className="grid flex-col-1 md:grid-cols-2 w-2/3">
                <div className="bg-white p-5 rounded-lg">
                    <h1 className="h1-nochero">Iniciar Sesión</h1>
                    <p className="p-nochero mb-5">
                        ¡Vamos!, inicia sesión para escoger la variedad de
                        alimentos que tenemos para tí.
                    </p>
                    <div className="mx-5">
                        <TacoButton
                            bgColor="100"
                            Icon={() => <FcGoogle />}
                            moreClasses="font-medium"
                            callBack={() => {}}
                            text="Iniciar sesión con Google"
                        />
                        <hr className="my-5" />
                        <label htmlFor="email">Correo electrónico:</label>
                        <TacoInput
                            id="email"
                            moreClasses="mb-5"
                            placeholder="Ej. manuel@gmail.com"
                            type="email"
                        />
                        <label htmlFor="pass">Contraseña:</label>
                        <TacoInput
                            id="pass"
                            placeholder=""
                            type="password"
                            moreClasses="mb-10"
                        />

                        <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Iniciar sesión"
                        />
                        <p className="text-center my-3 text-gray-300 font-bold">
                            ó
                        </p>

                        <TacoButton
                            bgColor="200"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Crear una cuenta"
                        />
                    </div>
                </div>
                <div
                    className="w-full h-20 md:h-full row-start-1 md:row-start-auto rounded-lg"
                    style={{
                        background: `url(https://images.unsplash.com/photo-1565299585323-38d6b0865b47)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </div>
        </div>
    );
}
