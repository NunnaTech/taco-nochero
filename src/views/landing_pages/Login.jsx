import React, { useState } from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";

export default function Login() {
    let expEmail =
        /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    const [emailState, setEmailState] = useState("");
    const [passState, setPassState] = useState("");
    const history = useHistory();
    const [typeEmail, setTypeEmail] = useState("");
    const [typePass, setTypePass] = useState("");

    const validLogin = () => {
        let flag = true;
        if (expEmail.test(emailState)) {
            flag &= true;
            setTypeEmail("correct");
        } else {
            flag &= false;
            setTypeEmail("error");
        }

        if (passState !== "") {
            setTypePass("correct");
            flag &= true;
        } else {
            flag &= false;
            setTypePass("error");
        }
        if (flag) {
            history.push("/taco-nochero/dashboard");
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
                        <label htmlhtmlFor="email">Correo electrónico:</label>
                        <TacoInput
                            id="email"
                            placeholder="Ej. manuel@gmail.com"
                            type="email"
                            data={emailState}
                            setData={setEmailState}
                            state={typeEmail}
                            errorMessage="El correo electrónico no debe estár vacío y ser inválido"
                        />
                        <label htmlhtmlFor="pass" className="my-2">
                            Contraseña:
                        </label>
                        <TacoInput
                            id="pass"
                            placeholder=""
                            type="password"
                            moreClasses=""
                            data={passState}
                            setData={setPassState}
                            state={typePass}
                            errorMessage="La contraseña no debe estár vacía"
                        />

                        <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold mt-10"
                            callBack={validLogin}
                            text="Iniciar sesión"
                        />
                        <p className="text-center my-3 text-gray-300 font-bold">
                            ó
                        </p>

                        <TacoButton
                            bgColor="200"
                            moreClasses="font-semibold"
                            callBack={() => {
                                history.push("/taco-nochero/register");
                            }}
                            text="Crear una cuenta"
                        />
                    </div>
                </div>
                <div
                    className="w-full h-20 md:h-full row-start-1 md:row-start-auto rounded-lg"
                    style={{
                        background: `url(https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </div>
        </div>
    );
}
