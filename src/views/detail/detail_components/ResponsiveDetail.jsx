import TacosDetalle from "../../../assets/images/TacosDetalle.png";
import Chechbox from "./Checkbox";
import TacoButton from "../../../commons/TacoButton";
import {MdShare, MdKeyboardBackspace} from 'react-icons/md';

const ResponsiveDetail = () =>{
    return(
        <div className="sm:flex sm:justify-center sm:items-center w-screen sm:w-full">
            <div className="bg-fixed h-32 bordered sm:hidden" style={{backgroundImage:`url(${TacosDetalle})`}}>
               <div className="grid grid-cols-2 bg-opacity-25 sm:hidden">
                   <span className="font-regular mt-5 ml-6 mr-6 text-white text-4xl">
                        <MdKeyboardBackspace/>
                    </span>
                   <span className="font-regular flex mt-5 justify-end mr-8 text-white text-4xl">
                         <MdShare/>
                    </span>
               </div>
            </div>
            <div className="sm:hidden h-screen bordered bg-nochero-500">
                <h1 className="font-bold text-white mt-16 text-2xl ml-10" >
                    Tacos al Pastor
                </h1>
                <h1 className="font-bold text-white text-2xl mt-5 ml-10" >
                    CONDIMENTOS
                </h1>
                <div className="mr-20 ml-9">
                    <Chechbox espaciado={0} mb={0}/>
                </div>
                <h1 className="font-bold text-white text-2xl ml-10" >
                    INGREDIENTES
                </h1>
                <h1 className="font-regular text-white mt-2 text-base ml-10" >
                    • Carne de cerdo
                </h1>
                <h1 className="font-regular text-white mt-2 text-base ml-10" >
                    • Tortilla de maíz
                </h1>
                <h1 className="font-regular text-white mt-2 text-base ml-10" >
                    • Pina (opcional)
                </h1>
                <h1 className="font-regular text-white mt-2 text-base ml-10" >
                    • Cebolla (opcional)
                </h1>
                <h1 className="font-regular text-white mt-2 text-base ml-10" >
                    • Cilantro (opcional)
                </h1>
                <div className="mr-12 ml-12 mt-5 mb-10">
                    <TacoButton text="Añadir al carrito" bgColor="400"/>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveDetail