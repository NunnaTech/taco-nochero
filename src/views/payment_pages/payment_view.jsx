import React from "react";
import { MdDelete } from "react-icons/md";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import TacoButtonIcon from "../../commons/TacoButtonIcon";

export default function Dashboard() {
  return (
    <div className="md:container w-full h-screen mx-auto text-white ">
      <div class="bg-white h-5/6 w-full m-5 grid grid-rows-3 grid-flow-col gap-2">
        <div class="bg-error col-span-2">
          <div class="m-4">
            <ul class="w-full steps">
              <li class="step step-primary">Detalles</li>
              <li class="step step-primary">Envío</li>
              <li class="step step-primary">Pago</li>
              <li class="step">Confirmar</li>
            </ul>
          </div>
        </div>
        <div class="bg-primary row-span-2 col-span-2">1</div>
        <div class="bg-secondary row-span-3">
          <div class="flex flex-col w-full">
            <div class="mt-2">
              <h1>RESUMEN DE ORDEN</h1>
            </div>
            <div class="divider"></div>
            <div class="bg-info">
              <div class="bg-red-600">
                <div class="flex flex-row">
                  <div>
                    <div>
                      <div class="card-body">
                        <h2 class="card-title">No Images</h2>
                        <p class="text-justify">
                          Rerum reiciendis beatae tenetur excepturi aut pariatur
                          est eos. Sit sit necessitatibus veritatis sed
                          molestiae voluptates incidunt iure sapiente.
                        </p>
                        <h2 class="card-title mb-0 mt-3">Cantidad: 10</h2>
                        <div class="card-actions m-0 ">
                          <button class="btn btn-error m-0">
                            <MdDelete color="white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divider m-0"></div>
              <div class="bg-green-700 p-2">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Cupón de Descuento:</span>
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      placeholder="PJ: EXRT5"
                      class="w-full  input input-primary input-bordered"
                    />
                    <button class="absolute top-0 right-0 rounded-l-none btn btn-warning">
                      APLICAR
                    </button>
                  </div>
                </div>
              </div>
              <div class="divider m-0 "></div>
                <div class="bg-yellow-500 grid place-items-center">
                  <h1>TOTAL:</h1>
                  <h1>$2552</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
