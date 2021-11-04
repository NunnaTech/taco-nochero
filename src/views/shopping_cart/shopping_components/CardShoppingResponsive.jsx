import CartProduct from "./CartProduct";

const CardShoppingResponsive = ({info}) =>{
    return(
        <div className="grid grid-cols-1">
            <div className="grid place-items-center rounded-b-3xl h-32 bg-nochero-400">
                <h1 className="font-regular text-white text-2xl">
                    Tu carrito:
                </h1>
            </div>
            <div className="mt-12 mr-6 ml-6 mb-6">
                {info.map(p=>{
                    return(
                        <CartProduct key={p.Nombre} nombre={p.Nombre} piezas={p.Piezas} img={p.IMG} precio={p.Precio}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CardShoppingResponsive;