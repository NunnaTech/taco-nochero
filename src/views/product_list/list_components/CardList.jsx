import Madera from '../../../assets/images/FondoProducto.png';
import {useState} from "react";

const CardList = ({producto, IMG}) => {
    const [shadow, setShadow] = useState("card image-full")
    return (
        <div  className="hover:bg-gray-200 card image-full">
            <figure>
                <img src={Madera}/>
            </figure>
            <div className="place-items-center card-body mt-5 content-center flex justify-items-center mr-2 ml-2">
                <h1 className="font-bold text-white text-2xl">
                    {producto}
                </h1>
                <img src={IMG} className="mt-12 md:h-16 lg:h-28 h-16"/>
            </div>
        </div>
    )
}

export default CardList;

/*
* onMouseOver={() => setShadow("animate-pulse")} onMouseOut={()=>setShadow("")} className={shadow}
*
* */