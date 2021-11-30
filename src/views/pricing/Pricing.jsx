import React, { useState } from "react";
import Switch from "./components/Switch";
import { promociones, promociones2 } from './components/data'
import CardList from "./components/Card_pricing";


const Pricing = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
       
        <div  className="hero min-h-screen " style={{ backgroundImage: "url('https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/678/600fe2ff-b26a-44c0-91bf-57af0a34740c.jpg')", backgroundAttachment: "fixed" }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="grid place-items-center min-h-screen " >

                <div class="max-w-md">
                    <p className="text-center text-white hero-content text-4xl">
                        Paquetes
                    </p>
                    <h1 className="text-5xl  font-bold text-white">Taco Nochero</h1>
                </div>
                <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
                {isToggled ? <div className="grid sm:grid-cols-3 grid-cols-1 mt-10 mr-8 ml-8 gap-3 mb-10 ">
                    {promociones2.map(obj => {
                        return (
                            <div key={obj.Titulo2}>
                                <CardList
                                    titulo2={obj.Titulo2}
                                    precio2={obj.Precio2}
                                    listt1={obj.Listt1}
                                    listt2={obj.Listt2}
                                    listt3={obj.Listt3}
                                    listt4={obj.Listt4}
                                />
                            </div>
                        )
                    })}
                </div> :
                    <div className="grid sm:grid-cols-3 grid-cols-1 mt-10 mr-8 ml-8 gap-3 mb-10 ">
                        {promociones.map(obj => {
                            return (
                                <div key={obj.Titulo}>
                                    <CardList
                                        titulo={obj.Titulo}
                                        precio={obj.Precio}
                                        list1={obj.List1}
                                        list2={obj.List2}
                                        list3={obj.List3}
                                        list4={obj.List4}
                                    />
                                </div>
                            )
                        })}
                    </div>}

            </div>
        </div>
    )
}

export default Pricing;