import React from "react";
import BrokenTaco from "../../assets/svg/broken_taco.svg";
import TacoButton from "../../commons/TacoButton";

export default function Page404() {
  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="card min-h-screen text-center text-white shadow-sm">
        <h1 className="text-center text-9xl font-bold">404</h1>
        <div className=" m-1">
          <h2 className="text-4xl  font-bold">Página no encontrada</h2>
          <p className="m-1 ">La página que estás buscando no existe</p>
          <div className="justify-center card-actions flex-col">
              <img className="m-2 " src={BrokenTaco} alt="broken taco" />
                <TacoButton
                  className="m-10 p-10"
                  bgColor="300"
                  callBack={() => console.log("going to landing page")}
                  text="Volver al inicio"
                />
          </div>
        </div>
      </div>
    </div>
  );
}
