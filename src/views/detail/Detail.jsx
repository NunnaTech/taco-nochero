import TacosDetalle from "../../assets/images/TacosDetalle.png";
import TacoButton from "../../commons/TacoButton";

const Detail = () => {
    return (
        <div className="md:grid md:grid-cols-2 h-screen text-white">
            <div className="bg-white flex justify-center items-center">
                <img src={TacosDetalle} className="h-60 md:h-4/6 rounded-lg" />
            </div>
            <div className="flex items-center justify-center">
                <div className="p-5 md:p-10 w-full md:w-3/4">
                    <h1 className="font-bold text-5xl">TACOS AL PASTOR</h1>
                    <h1 className="font-bold text-white text-2xl mb-3">
                        CONDIMENTOS
                    </h1>
                    <label className="cursor-pointer label">
                        <span className="font-regular text-base mr-5">
                            Deseo condimentos adicionales
                        </span>
                        <input
                            type="checkbox"
                            name="opt"
                            className="checkbox bg-white border-gray-400 border-2 hover:bg-nochero-400 focus:bg-nochero-400"
                            value=""
                        />
                    </label>
                    <h1 className="font-bold  text-2xl mb-6">INGREDIENTES</h1>
                    <h1 className="font-regular mt-2 text-base">
                        • Carne de cerdo
                    </h1>
                    <h1 className="font-regular  mt-2 text-base">
                        • Tortilla de maíz
                    </h1>
                    <h1 className="font-regular  mt-2 text-base">
                        • Pina (opcional)
                    </h1>
                    <h1 className="font-regular  mt-2 text-base">
                        • Cebolla (opcional)
                    </h1>
                    <h1 className="font-regular  mt-2 text-base">
                        • Cilantro (opcional)
                    </h1>
                    <div className="mt-16 mb-10 flex justify-center items-center">
                        <TacoButton text="Añadir al carrito" bgColor="400" />
                    </div>
                </div>
            </div>
            {/* <ResponsiveDetail/>
                <DetailNormal/> */}
        </div>
    );
};

export default Detail;
