export default function Delivery() {
  return (
    <body class="bg-gray-100">
      <div class="bg-gray-100 min-w-full max-w-6xl px-6 lg:px-6  mb-5">
        <form>
          <div class="bg-white rounded px-10 py-8  flex flex-col shadow-xl">
            <h1 class="card-title h2-nochero text-gray-800">
              Información de Contacto
            </h1>
            <h1 class="card-title h4-nochero text-nochero-400 ">
              Por favor, llena los siguientes campos.
            </h1>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="tracking-wide text-black text-xs font-bold mb-2"
                  for="company"
                >
                  Nombre(s)*
                </label>
                <input
                  class="w-full bg-gray-100 text-black border rounded py-3 px-4 mb-3 border-red-600 text-xs"
                  id="company"
                  type="text"
                  placeholder="Luis Enrique"
                />
                <div>
                  <span class="text-red-500 text-xs italic">
                    Por favor, rellena este campo.
                  </span>
                </div>
              </div>
              <div class="md:w-1/2 px-3">
                <label
                  class="tracking-wide text-black text-xs font-bold mb-2"
                  for="title"
                >
                  Apellido(s)*
                </label>
                <input
                  class="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 text-xs"
                  id="title"
                  type="text"
                  placeholder="Álvarez Ortiz"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="tracking-wide text-black text-xs font-bold mb-2"
                  for="application-link"
                >
                  Calle y número de casa*
                </label>
                <input
                  class="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 text-xs"
                  id="application-link"
                  type="text"
                  placeholder="Vicente Suarez #23"
                />
              </div>
            </div>{" "}
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <label
                  class="tracking-wide text-black text-xs font-bold mb-2"
                  for="application-link"
                >
                  Apartamento, local, etc (opcional)
                </label>
                <input
                  class="w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 text-xs"
                  id="application-link"
                  type="text"
                  placeholder="Vicente Suarez #23"
                />
              </div>
            </div>
            <div class="-mx-3 md:flex">
              <div class="md:w-1/2 px-3 mb-5 md:mb-0">
                <label
                  class="tracking-wide text-black text-xs font-bold mb-2"
                  for="location"
                >
                  Codigo Postal
                </label>
                <div>
                  <input
                    class="w-full bg-gray-100 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="location"
                    placeholder="62577"
                  ></input>
                </div>
              </div>
              <div class="md:w-1/2 px-3 mb-5">
                <label
                  class="tracking-wide text-black text-xs font-bold mb-2"
                  for="job-type"
                >
                  Ciudad
                </label>
                <div>
                  <input
                    class="w-full bg-gray-100 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="job-type"
                    placeholder="Cuernavaca"
                  ></input>
                </div>
              </div>
              <div class="md:w-1/2 px-3 mb-5">
                <label
                  class="tracking-wide text-black text-xs font-bold mb-2"
                  for="department"
                >
                  Celular
                </label>
                <div>
                  <input
                    class="w-full bg-gray-100 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                    id="department"
                    placeholder="7773445034"
                  ></input>
                </div>
              </div>
            </div>
            <div class="mb-5 card">
              <div class="form-control">
                <label class="cursor-pointer  label ">
                  <span class="label-text text-gray-600 text-base">
                    Guardar datos para próximas compras
                  </span>
                  <input type="checkbox" checked="checked" class="toggle toggle-nochero hover:bg-gray-300" />
                </label>
              </div>
            </div>
            <div class="p-6 card border-2 border-nochero-400">
              <div class="form-control max-w-max">
                <h1 class="h3-nochero card-title text-gray-700">Tipo de envío</h1>
                <label class="cursor-pointer label">
                  <span class="label-text text-gray-600 ml-5">Entrega Gratis</span>

                  <input
                    type="radio"
                    name="opt"
                    class="radio  bg-white border-gray-400 border-2 hover:bg-nochero-400 focus:bg-nochero-400"
                    value=""
                  />
                </label>
                <label class="cursor-pointer label">
                  <span class="label-text text-gray-600 ml-5 mr-5">
                    Entrega Rápida - $50
                  </span>
                  <input
                    type="radio"
                    name="opt"
                    class="radio  bg-white border-gray-400 border-2 hover:bg-nochero-400 focus:bg-nochero-400"
                    value=""
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}
