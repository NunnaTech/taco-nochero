import Chechbox from "./Checkbox";
import TacoButton from "../../../commons/TacoButton";

const DetailNormal =()=>{
    return(
        <div className="hidden sm:flex sm:flex-col sm:items-center mt-20">
            <div className="flex flex-col items-start">
                <h1 className="font-bold text-white text-2xl mb-3">
                    CONDIMENTOS
                </h1>
                <Chechbox espaciado={10} mb={3}/>
                <h1 className="font-bold text-white text-2xl mb-6">
                    INGREDIENTES
                </h1>
                <h1 className="font-regular text-white mt-2 text-base">
                    • Carne de cerdo
                </h1>
                <h1 className="font-regular text-white mt-2 text-base">
                    • Tortilla de maíz
                </h1>
                <h1 className="font-regular text-white mt-2 text-base">
                    • Pina (opcional)
                </h1>
                <h1 className="font-regular text-white mt-2 text-base">
                    • Cebolla (opcional)
                </h1>
                <h1 className="font-regular text-white mt-2 text-base">
                    • Cilantro (opcional)
                </h1>
            </div>
            <div className="mt-16 mb-10 flex justify-center items-center">
                <TacoButton text="Añadir al carrito" bgColor="400"/>
            </div>
        </div>
    )
}

export default DetailNormal;