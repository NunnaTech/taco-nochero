import CartProduct from "./CartProduct";
import {info} from "./InfoShopping";
import TacoButton from "../../../commons/TacoButton";

const CardShopping = () =>{
    return(
        <div className="card bg-base-200 w-2/4 text-center shadow-2xl">
            <div className="card-body">
                {info.map(p=>{
                    return(
                        <CartProduct key={p.Nombre} nombre={p.Nombre} precio={p.Precio} img={p.IMG} piezas={p.Piezas}/>
                    )
                })}
                <div className="justify-center card-actions">
                    <TacoButton bgColor="400" text="Continuar" moreClasses="mr-24 ml-24"/>
                </div>
            </div>
        </div>
)
}

export default CardShopping;