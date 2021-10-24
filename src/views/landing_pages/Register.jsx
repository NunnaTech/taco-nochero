import React from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
    return (
        <div className="w-full h-screen mx-auto flex justify-center place-items-center text-black">
            <div className="grid grid-col-1 md:grid-cols-2 w-full md:w-2/3">
                <div
                    className="w-full h-20 md:h-full rounded-lg"
                    style={{
                        background: `url(https://images.unsplash.com/photo-1624300629298-e9de39c13be5)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="bg-white p-5 rounded-lg">
                    <h1 className="h1-nochero">Registrate</h1>
                    <p className="p-nochero mb-4">
                        ¡Vamos!, Registrate para no perderte la gran variedad de
                        alimentos que tenemos para tí, en especial los tacos!.
                    </p>
                    <div className="mx-5">
                        <TacoButton
                            bgColor="100"
                            Icon={() => <FcGoogle />}
                            moreClasses="font-medium"
                            callBack={() => {}}
                            text="Registrarse con Google"
                        />
                        <hr className="my-4" />

                        <label htmlFor="name">Nombre(s)</label>
                        <TacoInput
                            id="name"
                            moreClasses="mb-4"
                            placeholder="Ej. Manuel"
                            type="text"
                        />

                        <label htmlFor="lastName">Apellidos(s)</label>
                        <TacoInput
                            id="lastName"
                            moreClasses="mb-4"
                            placeholder="Ej. Pavóz"
                            type="text"
                        />

                        <label htmlFor="email">Correo electrónico:</label>
                        <TacoInput
                            id="email"
                            moreClasses="mb-4"
                            placeholder="Ej. manuel@gmail.com"
                            type="email"
                        />
                        <label htmlFor="pass">Contraseña:</label>
                        <TacoInput
                            id="pass"
                            placeholder=""
                            type="password"
                            moreClasses="mb-8"
                        />

                        <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Crear cuenta"
                        />
                        <p className="text-center my-3 text-gray-300 font-bold">
                            ó
                        </p>

                        <TacoButton
                            bgColor="200"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Iniciar sesión"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
