import Taco from "../../assets/images/Taco.svg";
import SearchCustom from "./list_components/Search_Custom";
import { productos } from "./list_components/utilities";
import CardList from "./list_components/CardList";
import TacoButton from "../../commons/TacoButton";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const List = () => {
    return (
        <div className="h-full">
            <div className="grid place-items-center">
                <img src={Taco} className="mt-5" />
                <h1 className="font-bold text-white text-4xl mt-2 mb-5 content-center flex justify-items-center">
                    Menú
                </h1>
                <SearchCustom />
                <div className="mt-5">
                    <Link to="/taco-nochero/shoppingCart">
                        <TacoButton
                            Icon={() => <IoMdCart />}
                            text="Ver carrito"
                            bgColor="300"
                        />
                    </Link>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 mt-10 mr-24 ml-24 gap-4 mb-10">
                    {productos.map((obj) => {
                        return (
                            <div key={obj.Nombre}>
                                <CardList producto={obj.Nombre} IMG={obj.IMG} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default List;
