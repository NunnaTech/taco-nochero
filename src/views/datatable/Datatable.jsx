import Logo from "../../assets/img/Taco logo.svg";
import { Link } from "react-router-dom";
import TacoButton from "../../commons/TacoButton";
import { BiPlusMedical } from "react-icons/bi";
const Datatable = () => {
    const data = [
        {
            name: "Tacos al pastor",
            price: 60,
            category: "Tacos preparados",
        },
        {
            name: "Chilaquiles",
            price: 120,
            category: "Variados",
        },
        {
            name: "Hamburguesas",
            price: 250,
            category: "Hamburguesas",
        },
        {
            name: "Tortas cubanas",
            price: 85,
            category: "Tortas",
        },
        {
            name: "Paquete de 6 cervezas",
            price: 360,
            category: "Bebidas",
        },
    ];
    const renderButtons = () => {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return arr.map((i, key) => {
            return (
                <button className="btn" key={key}>
                    {i}
                </button>
            );
        });
    };

    return (
        <>
            <div className="navbar  shadow-lg px-5 text-neutral-content rounded-box py-5">
                <div className="flex-none hidden lg:flex">
                    <img src={Logo} width="62" height="62" />
                </div>
                <div className="flex-1 hidden px-2 mx-2 lg:flex">
                    <span className=" font-bold text-3xl">Productos</span>
                </div>
                <div className="flex-none mx-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pr-16 input input-bordered p-2"
                            style={{ color: "F57C00" }}
                        />
                        <button
                            className="absolute top-0 right-0 rounded-l-none btn"
                            style={{ backgroundColor: "#F57C00" }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-search"
                                viewBox="0 0 16 16"
                            >
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex-none">
                    <button
                        className="btn"
                        style={{ backgroundColor: "#F57C00" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-filter"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        Filtrar
                    </button>
                </div>
            </div>
            <div className="px-5">
                <Link to="/taco-nochero/registerProduct">
                    <TacoButton
                        Icon={() => <BiPlusMedical />}
                        bgColor="300"
                        text="Nuevo producto"
                    />
                </Link>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th align="center">#</th>
                                <th align="center">Nombre</th>
                                <th align="center">Precio</th>
                                <th align="center">Categoria</th>
                                <th align="center"> Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((i, key) => {
                                return (
                                    <tr className="hover" key={key}>
                                        <th align="center">{key + 1}</th>
                                        <td align="center">{i.name}</td>
                                        {i.price > 0 && i.price < 100 ? (
                                            <td align="center">
                                                <h6
                                                    style={{
                                                        backgroundColor:
                                                            "#1D9B28",
                                                        borderRadius: 15,
                                                        padding: 6,
                                                    }}
                                                >
                                                    {i.price}
                                                </h6>
                                            </td>
                                        ) : i.price >= 100 && i.price < 300 ? (
                                            <td align="center">
                                                <h6
                                                    style={{
                                                        backgroundColor:
                                                            "#F96300",
                                                        borderRadius: 15,
                                                        padding: 6,
                                                    }}
                                                >
                                                    {i.price}
                                                </h6>
                                            </td>
                                        ) : i.price >= 300 ? (
                                            <td align="center">
                                                <h6
                                                    style={{
                                                        backgroundColor:
                                                            "#C11616",
                                                        borderRadius: 15,
                                                        padding: 6,
                                                    }}
                                                >
                                                    {i.price}
                                                </h6>
                                            </td>
                                        ) : (
                                            <></>
                                        )}
                                        <td align="center">{i.category}</td>
                                        <td align="center">
                                            <Link
                                                to="/taco-nochero/productDetail"
                                                className="btn space-x-2"
                                                style={{
                                                    backgroundColor: "#F57C00",
                                                }}
                                            >
                                                Ver detalles
                                            </Link>
                                            <button
                                                className="btn  space-x-2"
                                                style={{
                                                    backgroundColor: "#F57C00",
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="10"
                                                    fill="currentColor"
                                                    className="bi bi-three-dots"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className=" flex btn-group  justify-center py-8">
                <button className="btn">Previous</button>
                {renderButtons()}
                <button className="btn">Next</button>
            </div>
        </>
    );
};

export default Datatable;
