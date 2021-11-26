import { MdInfo, MdLocalShipping, MdCreditCard } from "react-icons/md";

export default function Confirmation() {
  return (
    <body class="bg-gray-100">
      <div class="bg-gray-100 min-w-full max-w-6xl px-6 lg:px-6  mb-5">
        <div class="bg-white rounded px-10 py-8  flex flex-col shadow-xl">
          <h1 class="card-title h2-nochero text-gray-800">
            Confirma tus Datos
          </h1>
          <h1 class="card-title h4-nochero text-nochero-400 ">
            Por favor, verifica que todo este correcto.
          </h1>
          <div className="card bg-gray-100 border-2 py-2 rounded mb-5 shadow flex justify-center">
            <div className="flex flex-row justify-around items-center ">
              <div className="w-3/6">
                <h1 class="h3-nochero card-title mt-3 text-nochero-500">
                  Contacto:
                </h1>
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
              <div className="">
                <MdInfo size="50" className="mr-3 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="card bg-gray-100 border-2 py-2 rounded mb-5 shadow flex justify-center">
            <div className="flex flex-row justify-around items-center ">
              <div className="w-3/6">
                <h1 class="h3-nochero card-title mt-3 text-nochero-500">
                  Envío:
                </h1>
                <p className="text-lg text-nochero-500 mb-5">
                  Vicente Suarez #123 Villagón, Jiutepec, Morelos Portón Cafe,
                  Fachada Naranja
                </p>
              </div>
              <div className="">
                <MdLocalShipping size="50" className="mr-3 text-green-500" />
              </div>
            </div>
          </div>
          <div className="card h-48 bg-gray-100 border-2 py-2 rounded mb-5 shadow flex justify-center">
            <div className="flex flex-row justify-around items-center ">
              <div className="w-3/6">
                <h1 class="h3-nochero card-title mt-3 text-nochero-500">
                  Pago:
                </h1>
                <div>
                  <h1 class="h4-nochero card-title  text-gray-700">
                    Mastercard con terminación 4123
                  </h1>
                </div>
              </div>
              <div className="">
                <MdCreditCard size="50" className="mr-3 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
