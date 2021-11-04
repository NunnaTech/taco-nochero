import CardShopping from "./shopping_components/CardShopping";
import {info} from "./shopping_components/InfoShopping";
import CardShoppingResponsive from "./shopping_components/CardShoppingResponsive";


const ShoppingCart = ()=>{
    return(
        <div className="sm:grid sm:place-items-center sm:h-full h-full">
            <div className="sm:container sm:mx-auto sm:flex sm:justify-center sm:mt-12 sm:mb-12 hidden">
                <CardShopping/>

            </div>
            <div className="sm:hidden">
                <CardShoppingResponsive info={info}/>
            </div>
        </div>
    )
}

export  default  ShoppingCart;