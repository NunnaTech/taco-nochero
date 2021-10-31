import React, { useState } from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    let expEmail =
        /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        
    const [emailState, setEmailState] = useState("");
    const [passState, setPassState] = useState("");

    const [typeEmail, setTypeEmail] = useState("");
    const [typePass, setTypePass] = useState("");

    const validLogin = () => {
        if (expEmail.test(emailState)) {
            setTypeEmail("correct");
        } else {
            setTypeEmail("error");
        }

        if (passState !== "") {
            setTypePass("correct");
        } else {
            setTypePass("error");
        }
    };

    return (
        <div className="w-full h-screen mx-auto flex justify-center place-items-center text-black">
            <div className="grid grid-col-1 md:grid-cols-2 w-full md:w-2/3">
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
                            data={emailState}
                            setData={setEmailState}
                            state={typeEmail}
                        />
                        <label htmlFor="pass">Contraseña:</label>
                        <TacoInput
                            id="pass"
                            placeholder=""
                            type="password"
                            moreClasses="mb-10"
                            data={passState}
                            setData={setPassState}
                            state={typePass}
                        />

                        <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold"
                            callBack={validLogin}
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
