import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
    let expEmail =
        /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const history = useHistory();
    const [nameState, setNameState] = useState("");
    const [lastnameState, setLastnameState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [passState, setPassState] = useState("");
    const [pass2State, setPass2State] = useState("");
    const [typeName, setTypeName] = useState("");
    const [typeLastname, setTypeLastname] = useState("");
    const [typeEmail, setTypeEmail] = useState("");
    const [typePass, setTypePass] = useState("");
    const [typePass2, setTypePass2] = useState("");

    const validRegister = () => {
        let flag = true;
        if (nameState !== "") {
            setTypeName("correct");
            flag &= true;
        } else {
            setTypeName("error");
            flag &= false;
        }

        if (lastnameState !== "") {
            setTypeLastname("correct");
            flag &= true;
        } else {
            setTypeLastname("error");
            flag &= false;
        }

        if (expEmail.test(emailState)) {
            setTypeEmail("correct");
            flag &= true;
        } else {
            setTypeEmail("error");
            flag &= false;
        }

        if (passState !== "" && pass2State !== "" && passState === pass2State) {
            setTypePass("correct");
            setTypePass2("correct");
            flag &= true;
        } else {
            setTypePass("error");
            setTypePass2("error");
            flag &= false;
        }
        if(flag){
            history.push('login')
        }
    };

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
                    <h1 className="h1-nochero my-4">Registrate</h1>

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
                            data={nameState}
                            setData={setNameState}
                            state={typeName}
                        />

                        <label htmlFor="lastName">Apellidos(s)</label>
                        <TacoInput
                            id="lastName"
                            moreClasses="mb-4"
                            placeholder="Ej. Pavóz"
                            type="text"
                            data={lastnameState}
                            setData={setLastnameState}
                            state={typeLastname}
                        />

                        <label htmlFor="email">Correo electrónico:</label>
                        <TacoInput
                            id="email"
                            moreClasses="mb-4"
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
                            moreClasses="mb-4"
                            data={passState}
                            setData={setPassState}
                            state={typePass}
                        />

                        <label htmlFor="pass">Confirmar contraseña:</label>
                        <TacoInput
                            id="pass"
                            placeholder=""
                            type="password"
                            moreClasses="mb-8"
                            data={pass2State}
                            setData={setPass2State}
                            state={typePass2}
                        />

                        <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold"
                            callBack={validRegister}
                            text="Crear cuenta"
                        />
                        <p className="text-center my-3 text-gray-300 font-bold">
                            ó
                        </p>

                        <TacoButton
                            bgColor="200"
                            moreClasses="font-semibold"
                            callBack={() => {
                                history.push("/login");
                            }}
                            text="Iniciar sesión"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
