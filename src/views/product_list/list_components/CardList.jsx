import Madera from "../../../assets/images/FondoProducto.png";
import { Link } from "react-router-dom";

const CardList = ({ producto, IMG }) => {
    return (
        <Link to="/taco-nochero/productDetail">
            <div className="hover:bg-gray-200 card image-full">
                <figure>
                    <img src={Madera} />
                </figure>
                <div className="place-items-center card-body mt-5 content-center flex justify-center ">
                    <h1 className="font-bold text-white text-2xl">
                        {producto}
                    </h1>
                    <img
                        src={IMG}
                        className="h-40 shadow rounded w-auto align-middle border-none"
                    />
                </div>
            </div>
        </Link>
    );
};

export default CardList;
