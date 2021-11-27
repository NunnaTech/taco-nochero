import React, { useState } from "react";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import Logo from '../../assets/img/Taco logo.svg'

import { useHistory } from "react-router-dom";

export default function Register() {

    return (
        <div className="w-full h-screen mx-auto flex justify-center place-items-center text-black">
            <div className="grid  w-full md:w-3/5">
                <div className="bg-white p-5 rounded-lg">
                    <div className="flex justify-center ">
                        <img src={Logo} width="32" height="32" />
                    </div>
                    <div>
                    <p className="text-center text-black hero-content p-nochero">
                            Registrar Producto
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 mt-10 mr-30 ml-30 gap-2 mb-10 ">


                        <label class="input-group ">
                            <span>Nombre</span>
                            <TacoInput type="text" placeholder="Torta de Mole" class="input input-bordered" />
                        </label>
                        <label class="input-group">
                            <span>Precio($)</span>
                            <TacoInput type="text" placeholder="20" class="input input-bordered" />
                        </label>
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled="disabled" selected="selected">Seleccionar Categoría</option>
                            <option>Tacos</option>
                            <option>Tortas</option>
                            <option>Bebidas</option>
                        </select>
                        <div class="form-control">
                            <label class="label">
                            </label>
                            <textarea class="textarea h-24 textarea-bordered" placeholder="Descripción"></textarea>
                        </div>
                        <div >
                        <label class="input-group">
                            <span>Imagen</span>
                            <TacoInput type="text" placeholder="https://i.imgur.com/VlmHIgu.jpg" class="input input-bordered" />
                        </label>
                        </div>
                       
                      
                       <div> <TacoButton
                            bgColor="200"
                            moreClasses="font-semibold"
                            text="Registrar Producto"
                        /></div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
