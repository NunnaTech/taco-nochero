import Logo from '../../assets/img/Taco logo.svg'
const Datatable = () => {

    const data = [
        {
            name: "Tacos al pastor",
            price: 60,
            category: "Tacos preparados"
        },
        {
            name: "Chilaquiles",
            price: 120,
            category: "Variados"
        },
        {
            name: "Hamburguesas",
            price: 250,
            category: "Hamburguesas"
        },
        {
            name: "Tortas cubanas",
            price: 85,
            category: "Tortas"
        },
        {
            name: "Paquete de 6 cervezas",
            price: 360,
            category: "Bebidas"
        },

    ]
    const renderButtons = () => {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        return arr.map((i, key) => {
            return <button className="btn" key={key}>{i}</button>
        })
    }

    return (
        <>
            <section className="flex justify-evenly py-5">
                <img src={Logo} width="32" height="32" />
                <span className="text-lg font-bold">
                    Productos
                </span>
                <div className="relative">
                    <input type="text" placeholder="Search" className="w-full pr-16 input input-bordered" style={{ color: 'F57C00'}}/>
                    <button className="absolute top-0 right-0 rounded-l-none btn" style={{backgroundColor: '#F57C00'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>

                </div>
                <button className="btn btn-primary" style={{backgroundColor: '#F57C00'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    Filtrar
                </button>
            </section>
            <div className="px-5">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="">#</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((i, key) => {
                                    return (
                                        <tr className="hover" key={key}>
                                            <th>{key + 1}</th>
                                            <td>{i.name}</td>
                                            <td>{i.price}</td>
                                            <td>{i.category}</td>
                                            <td>
                                                <button className="btn" style={{ backgroundColor: "#F57C00" }}>Ver detalles</button>
                                                <button className="btn" style={{ backgroundColor: "#F57C00" }} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
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
    )
}

export default Datatable;