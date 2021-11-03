import React, { useState } from "react";
import Switch from "../../commons/Switch";
import "../../assets/css/switch.css";
import TacoButton from "../../commons/TacoButton";
export default function Notifications() {

    const [isToggled,setIsToggled]= useState(false);
    return (

        <div className="hero min-h-screen " style={{ backgroundImage: "url('https://i.imgur.com/VlmHIgu.jpg')", backgroundAttachment: "fixed" }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="text-center hero-content text-neutral-content">
          
         
<div className="w-full h-screen mx-auto ">
            <div class="text-center hero-content">          
               <div class="max-w-md">
                  <p  className="text-center hero-content p-nochero">
                        Paquetes
                    </p>
                    <h1 className="h1-nochero">Taco Nochero</h1>  
              </div>
              
        </div> 
        <Switch isToggled={isToggled} onToggle={()=> setIsToggled(!isToggled)} />
       { isToggled ?<div className=" flex space-x-2 md:space-x-8 justify-between  text-black  flex-col md:flex-row ">
                <div  className=" color p-5 rounded-lg">
                    <h1 className="h1-nochero">Básico</h1>
                    <p  className="text-center my-3 ">
                    500$/mes
                    </p>
                    <ol className="list-disc pl-10 p-nochero">
                            <li>Entrega a domicilio</li>
                            <li>Postres Gratis</li>
                            <li>Bebidas Gratis</li>
                            <li>2x1 En Tacos</li>
                        </ol>
                        <br/>
                        <TacoButton
                            bgColor="500"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Adquirir"
                        />
                    </div>
                    <div className="color p-5 rounded-lg">
                    <h1 className="h1-nochero">Pro</h1>
                    <p className="text-center my-3 ">
                    800$/mes
                    </p>
                    <ol className="list-disc pl-10 p-nochero">
                            <li>Entrega a domicilio</li>
                            <li>Postres Gratis</li>
                            <li>Bebidas Gratis</li>
                            <li>2x1 En Tacos y Tortas</li>
                        </ol>
                        <br/>
                        <TacoButton
                            bgColor="500"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Adquirir"
                        />
                    </div>
                    <div className="color p-5 rounded-lg">
                    <h1 className="h1-nochero">Premium</h1>
                    <p className="text-center my-3 ">
                    1000/mes
                    </p>
                    <ol className="list-disc pl-10 p-nochero">
                            <li>Entrega a domicilio</li>
                            <li>Postres Gratis</li>
                            <li>Bebidas Gratis</li>
                            <li>2x1 En Toda la Comida</li>
                        </ol>
                        <br/>
                        <TacoButton
                            bgColor="500"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Adquirir"
                        />
                    </div>             
                    </div> : <div className=" flex space-x-2 md:space-x-8 justify-between  text-black  flex-col md:flex-row">
                <div  className=" color p-5 rounded-lg">
                    <h1 className="h1-nochero">Básico</h1>
                    <p  className="text-center my-3 ">
                    120$/mes
                    </p>
                    <ol className="list-disc pl-10 p-nochero">
                            <li>Entrega a domicilio</li>
                            <li>Tacos 2x1</li>
                            <li>Cupon Gratis</li>
                        </ol>
                        <br/>
                        <TacoButton
                            bgColor="500"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Adquirir"
                        />
                    </div>
                    <div className="color p-5 rounded-lg">
                    <h1 className="h1-nochero">Pro</h1>
                    <p className="text-center my-3 ">
                    250$/mes
                    </p>
                    <ol className="list-disc pl-10 p-nochero">
                            <li>Entrega a domicilio</li>
                            <li>Cerveza 2x1</li>
                            <li>Postres y bebidas gratis</li>
                        </ol>
                        <br/>
                        <TacoButton
                            bgColor="500"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Adquirir"
                        />
                    </div>
                    <div className="color p-5 rounded-lg">
                    <h1 className="h1-nochero">Premium</h1>
                    <p className="text-center my-3 ">
                    500$/mes
                    </p>
                    <ol className="list-disc pl-10 p-nochero">
                            <li>Entrega a domicilio</li>
                            <li>Orden de tacos gratis</li>
                            <li>Postres y bebidas gratis</li>
                        </ol>
                        <br/>
                        <TacoButton
                            bgColor="500"
                            moreClasses="font-semibold"
                            callBack={() => {}}
                            text="Adquirir"
                        />
                    </div>             
                    </div>}
            
                    
        </div>
        </div>
</div>
 
        
            
    );
}