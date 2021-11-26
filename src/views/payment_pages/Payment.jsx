import {
  MdInfo,
  MdLocalShipping,
  MdCreditCard,
  MdCalendarToday,
  MdPerson,
} from "react-icons/md";

export default function Payment() {
  return (
    <body class="bg-gray-100">
      <div class="bg-gray-100 min-w-full max-w-6xl px-6 lg:px-6  mb-5">
        <div class="bg-white rounded px-10 py-8  flex flex-col shadow-xl">
          <h1 class="card-title h2-nochero text-gray-800">Resumen de Pago</h1>
          <h1 class="card-title h4-nochero text-nochero-400 ">
            Por favor, selecciona, tu método de pago:
          </h1>
          <div className="card bg-gray-100 border-2 py-2 rounded mb-5 shadow-sm flex justify-center">
            <div className="flex flex-row justify-around items-center ">
              <div className="w-3/6">
                <h1 class="h3-nochero card-title mt-3 text-nochero-500">
                  Contacto:
                </h1>
                <div>
                  <h1 class="h4-nochero card-title  text-gray-700">
                    Luis Enrique Álvarez Ortiz
                  </h1>
                  <h1 class="h4-nochero card-title  text-gray-700">
                    emoxito@gmail.com
                  </h1>
                  <h1 class="h4-nochero card-title  text-gray-700">
                    777 344 50 36
                  </h1>
                </div>
              </div>
              <div className="">
                <MdInfo size="50" className="mr-3 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="card bg-gray-100 border-2 py-2 rounded mb-5 shadow-sm flex justify-center">
            <div className="flex flex-row justify-around items-center ">
              <div className="w-3/6">
                <h1 class="h3-nochero card-title mt-3 text-nochero-500">
                  Envío:
                </h1>
                <div>
                  <p className="text-lg text-nochero-500 mb-5">
                    Vicente Suarez #123 Villagón, Jiutepec, Morelos Portón Cafe,
                    Fachada Naranja
                  </p>
                </div>
              </div>
              <div className="">
                <MdLocalShipping size="50" className="mr-3 text-green-500" />
              </div>
            </div>
          </div>
          <div className="card bg-white  py-2 rounded mb-5 shadow-sm flex justify-center">
            <div className="py-5">
              <div class="-mx-3 md:flex mb-6 px-1">
                <div class="md:w-full px-3">
                  <label class="tracking-wide text-black  font-bold mb-2">
                    Número de Tarjeta (18 Dígitos)
                  </label>
                  <label class="input-group  tracking-wide text-black  font-bold mt-2">
                    <input
                      type="text"
                      value="0000 0000 0000 0000"
                      class="input input-bordered  w-full bg-gray-100 border border-gray-200 text-gray-500  py-3 px-4 mb-3 rounded"
                    />
                    <span class="input input-bordered  bg-gray-200 border border-gray-200 text-black rounded">
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
                      value="Luis Enrique Álvarez Ortiz"
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
                      value="MM/YY"
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
                      value="***"
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
                      class="toggle toggle-nochero"
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
