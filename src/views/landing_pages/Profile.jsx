import React from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";

export default function Profile() {
    return (
        <div className="w-full h-screen mx-auto flex justify-center place-items-center text-black">
            <div className="grid grid-col-1 md:grid-cols-2 w-full md:w-2/3">
                <div
                    className="w-full h-20 md:h-full rounded-lg"
                    style={{
                        background: `url(https://i.imgur.com/n57ZYIj.jpg)`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>

                <div className="bg-white p-5 rounded-lg">
                    <h1 className="h1-nochero my-4">Perfil</h1>
                    <img
                        className="w-20 h-20 rounded-full mx-auto  md:w-48 md:h-48"
                        style={{
                            background: `url(https://i.imgur.com/4iZkWmQ.jpg)`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></img>
                    <div className="mx-5">
                        <hr className="my-4" />

                        <label htmlhtmlFor="name">Nombre(s)</label>
                        <TacoInput
                            id="name"
                            moreClasses="mb-4"
                            placeholder="Pedrito"
                            type="text"
                        />

                        <label htmlhtmlFor="lastName">Apellidos(s)</label>
                        <TacoInput
                            id="lastName"
                            moreClasses="mb-4"
                            placeholder="Perez"
                            type="text"
                        />

                        <label htmlhtmlFor="email">Correo electrónico:</label>
                        <TacoInput
                            id="email"
                            moreClasses="mb-4"
                            placeholder="pedro@gmail.com"
                            type="email"
                        />
                        <label htmlhtmlFor="pass">Contraseña:</label>
                        <TacoInput
                            placeholder=""
                            type="password"
                            placeholder="********"
                            moreClasses="mb-8"
                        />
                        <TacoButton
                            bgColor="300"
                            moreClasses="font-semibold"
                            text="Guardar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
