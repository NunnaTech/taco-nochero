import React, { useState } from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import Logo from "../../assets/img/Taco logo.svg";

import { useHistory } from "react-router-dom";

export default function RegisterProduct() {
    const [test1, setTest1] = useState();
    const [test2, setTest2] = useState();
    const [test3, setTest3] = useState();
    const [test4, setTest4] = useState();
    return (
        <div className="w-full h-screen mx-auto flex justify-center place-items-center text-black">
            <div className="grid  w-full md:w-3/5">
                <div className="bg-white p-5 rounded-lg">
                    <div className="flex justify-center ">
                        <img src={Logo} width="32" height="32" />
                    </div>
                    <p className="h3-nochero text-center">Registrar Producto</p>
                    <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 mr-30 ml-30 gap-2 mb-10 ">
                        <label className="input-group">
                            <span className="bg-nochero-200">Nombre</span>
                            <TacoInput
                                type="text"
                                data={test1}
                                setData={setTest1}
                                placeholder="Torta de Mole"
                                className="input input-bordered"
                            />
                        </label>
                        <label className="input-group">
                            <span className="bg-nochero-200">Precio($)</span>
                            <TacoInput
                                type="text"
                                data={test2}
                                setData={setTest2}
                                placeholder="20"
                                className="input input-bordered"
                                onChange={(e) => {}}
                            />
                        </label>
                        <select className="select select-bordered w-full bg-nochero-200">
                            <option defaultValue>
                                Seleccionar Categoría
                            </option>
                            <option>Tacos</option>
                            <option>Tortas</option>
                            <option>Bebidas</option>
                        </select>
                        <div className="form-control">
                            <textarea
                                className="textarea h-24 bg-white border-nochero-200"
                                placeholder="Descripción"
                            ></textarea>
                        </div>
                        <div>
                            <label className="input-group">
                                <span className="bg-nochero-200">Imagen</span>
                                <TacoInput
                                    type="text"
                                    data={test3}
                                    setData={setTest3}
                                    placeholder="https://i.imgur.com/VlmHIgu.jpg"
                                    className="input input-bordered"
                                    onChange={(e) => {}}
                                />
                            </label>
                        </div>
                        <div>
                            <TacoButton
                                bgColor="300"
                                moreClasses="font-semibold"
                                text="Registrar Producto"
                                data={test4}
                                setData={setTest4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
