import React from "react";
import Cerveza from '../../assets/img/cerveza.png'
import Platillo from '../../assets/img/platillo.jpg'
const SectionBody = () => {
    return (
        <>
            <section className="hero h-130 py-14 lg:px-20">
                <div className="flex-col hero-content lg:flex-row">
                    <div>
                        <img src={Platillo} className="object-contain md:object-scale-down sm:object-scale-down" />
                    </div>

                    <div className="md:container md:mx-auto lg:container lg:mx-auto">
                        <h1 className="mb-2 text-4xl">
                            Encuentra
                        </h1>
                        <h1 className="mb-5 text-5xl font-bold">
                            Tú comida favorita
                        </h1>
                        <p className="mb-5">
                            En un solo lugar, con precios accesibles y para toda la familia.
                        </p>
                    </div>
                </div>
            </section>
            <section className="hero h-130 lg:px-20">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div >
                        <img src={Cerveza} className="object-contain md:object-scale-down sm:object-scale-down" />
                    </div>

                    <div className="md:container md:mx-auto lg:container lg:mx-auto flex justify-end">
                        <div className="">
                            <h1 className="mb-2 text-4xl">
                                Disfruta
                            </h1>
                            <h1 className="mb-5 text-5xl font-bold">
                                Los descuentos
                            </h1>
                            <p className="mb-5">
                                Que tenemos para tí cada semana todos los días del año.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionBody;