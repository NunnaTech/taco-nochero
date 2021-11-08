export default function Details() {
  return (
    <body class="bg-gray-100 flex">
      <div class="bg-gray-100 min-w-full  px-6 lg:px-6  mb-5">
        <form>
          <div class="bg-white rounded  px-10 pt-6 pb-8 mb-4 flex flex-col shadow-xl ">
            <h1 class="card-title h2-nochero text-gray-800">
              RESUMEN DE ORDEN
            </h1>            
            <div class="-mx-3 md:flex mb-6">
              <div class="md:w-full px-3">
                <h1 class="card-title h4-nochero mt-5 text-nochero-500 ">
                  Subtotal:
                </h1>
                <h1 class="card-title h4-nochero mt-5 text-nochero-500 ">
                  IVA (16%):
                </h1>
                <h1 class="card-title h4-nochero mt-5 text-nochero-500 ">
                  Total: $523.20
                </h1>
              </div>
            </div>
            <div class="form-control max-w-max">
              <label class="cursor-pointer label">
                <span class="text-gray-600 text-lg mr-5">
                  Deseo Facturar
                </span>
                <input
                  type="radio"
                  name="opt"
                  class="radio bg-white border-gray-600"
                  value=""
                />
              </label>
            </div>
            <h1 class="card-title h4-nochero mt-5  text-gray-600">
                  El costo del envío se mostrará más adelante
                </h1>
          </div>
        </form>
      </div>
    </body>
  );
}
