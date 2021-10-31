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
                        <h1 className="mb-2 text-4xl text-white">
                            Encuentra
                        </h1>
                        <h1 className="mb-5 text-5xl font-bold text-white">
                            Tú comida favorita
                        </h1>
                        <p className="mb-5 text-white">
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
                            <h1 className="mb-2 text-4xl text-white">
                                Disfruta
                            </h1>
                            <h1 className="mb-5 text-5xl font-bold text-white">
                                Los descuentos
                            </h1>
                            <p className="mb-5 text-white">
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