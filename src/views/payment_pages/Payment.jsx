import {
  MdInfo,
  MdCreditCard,
  MdCalendarToday,
  MdPerson,
} from "react-icons/md";

import Mastercard from "../../../src/assets/images/Mastercard.png";
import Visa from "../../../src/assets/images/Visa.png";
import Paypal from "../../../src/assets/images/Paypal.png";
import Apple from "../../../src/assets/images/Apple.png";

export default function Payment() {
  return (
    <body class="bg-gray-100">
      <div class="bg-gray-100 min-w-full max-w-6xl px-6 lg:px-6  mb-5">
        <div class="bg-white rounded px-10 py-8  flex flex-col shadow-xl">
          <h1 class="card-title h2-nochero text-gray-800">Resumen de Pago</h1>
          <h1 class="card-title h4-nochero text-nochero-400 ">
            Selecciona tu método de pago:
          </h1>
          <div className="card bg-gray-100 border-2 py-4 rounded mb-5 shadow-sm flex justify-center">
            <div className="flex flex-row justify-around items-center my-2">
              <button className="w-6/12 sm:w-4/12 px-4 border-2 rounded-lg bg-gray-50 border-gray-400 hover:bg-yellow-50 hover:border-yellow-500 hover:shadow-lg focus:bg-yellow-50 focus:border-yellow-500 focus:shadow-lg transform hover:scale-110 motion-reduce:transform-none">
                <img
                  src={Mastercard}
                  alt="..."
                  class=" rounded max-w-full align-middle  object-contain h-28"
                />
              </button>
              <button className="w-6/12 sm:w-4/12 px-4 border-2 rounded-lg bg-gray-50 border-gray-400 hover:bg-blue-50 hover:border-blue-900 hover:shadow-lg focus:bg-blue-50 focus:border-blue-900 focus:shadow-lg transform hover:scale-110 motion-reduce:transform-none">
                <img
                  src={Visa}
                  alt="..."
                  class="rounded max-w-full object-contain h-28 align-middle"
                />
              </button>
            </div>
            <div className="flex flex-row justify-around items-center mt-5 my-2">
              <button className="w-6/12 sm:w-4/12 px-4 border-2 rounded-lg bg-gray-50 border-gray-400 hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg focus:bg-blue-50 focus:border-blue-500 focus:shadow-lg transform hover:scale-110 motion-reduce:transform-none">
                <img
                  src={Paypal}
                  alt="..."
                  class=" rounded max-w-full align-middle  object-contain h-28"
                />
              </button>
              <button className="w-6/12 sm:w-4/12 px-4 border-2 rounded-lg bg-gray-50 border-gray-400 hover:bg-gray-200 hover:border-gray-500 hover:shadow-lg focus:bg-gray-200 focus:border-gray-500 focus:shadow-lg transform hover:scale-110 motion-reduce:transform-none ">
                <img
                  src={Apple}
                  alt="..."
                  class="rounded max-w-full object-contain h-28 align-middle"
                />
              </button>
            </div>
          </div>
          <div className="card bg-white  mb-5  flex justify-center">
            <div className="py-5">
              <div class="-mx-3 md:flex mb-6 px-1">
                <div class="md:w-full px-3">
                  <label class="tracking-wide text-black  font-bold mb-2">
                    Número de Tarjeta (18 Dígitos)
                  </label>
                  <label class="input-group  tracking-wide text-black  font-bold mt-2">
                    <input
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      class="input input-bordered  w-full bg-gray-100 border border-gray-200 text-gray-500  py-3 px-4 mb-3 rounded"
                    />
                    <span class="input input-bordered  bg-gray-200 border border-gray-200 text-black rounded ">
                      <MdCreditCard size="30" className="text-gray-500" />
                    </span>
                  </label>
                </div>
              </div>{" "}
              <div class="-mx-3 md:flex mb-6 px-1">
                <div class="md:w-full px-3">
                  <label class="tracking-wide text-black  font-bold mb-2">
                    Nombre del Titular
                  </label>
                  <label class="input-group  tracking-wide text-black  font-bold mt-2">
                    <input
                      type="text"
                      placeholder="Luis Enrique Álvarez Ortiz"
                      class="input input-bordered  w-full bg-gray-100 border border-gray-200 text-gray-500  py-3 px-4 mb-3 rounded"
                    />
                    <span class="input input-bordered  bg-gray-200 border border-gray-200 text-black rounded">
                      <MdPerson size="30" className="text-gray-500" />
                    </span>
                  </label>
                </div>
              </div>
              <div class="-mx-3 md:flex px-1">
                <div class="md:w-1/2 px-3 mb-5">
                  <label class="tracking-wide text-black  font-bold mb-2">
                    Fecha de Expiración
                  </label>

                  <label class="input-group  tracking-wide text-black  font-bold mt-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      class="input input-bordered  w-full bg-gray-100 border text-gray-500   py-3 px-4 mb-3 rounded"
                    />
                    <span class="input input-bordered   bg-gray-200 border border-gray-200 text-black rounded">
                      <MdCalendarToday size="30" className="text-gray-500" />
                    </span>
                  </label>
                </div>
                <div class="md:w-1/2 px-3 mb-5">
                  <label class="tracking-wide text-black  font-bold mb-2">
                    CVV
                  </label>

                  <label class="input-group  tracking-wide text-black  font-bold mt-2">
                    <input
                      type="text"
                      placeholder="***"
                      class="input input-bordered  w-full bg-gray-100 border border-gray-200 text-gray-500  py-3 px-4 mb-3 rounded"
                    />
                    <span class="input input-bordered   bg-gray-200 border border-gray-200 text-black rounded">
                      <MdInfo size="30" className="text-gray-500" />
                    </span>
                  </label>
                </div>
              </div>
              <div class="my-1 card">
                <div class="form-control">
                  <label class="cursor-pointer  label ">
                    <span class="label-text text-gray-600 text-base">
                      Guardar datos para próximas compras
                    </span>
                    <input
                      type="checkbox"
                      checked="checked"
                      class="toggle toggle-nochero hover:bg-gray-300"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
