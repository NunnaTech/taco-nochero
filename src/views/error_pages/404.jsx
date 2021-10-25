import React from "react";
import BrokenTaco from "../../assets/svg/broken_taco.svg";
import TacoButton from "../../commons/TacoButton";

export default function Page404() {
  return (
    <div className="flex h-screen  items-center justify-center ">
      <div className="card  text-center text-white shadow-sm p-5">
        <h1 className="text-center text-9xl font-bold">404</h1>
        <div className="m-1">
          <h2 className="text-4xl  font-bold">Página no encontrada</h2>
          <p className="m-1 ">La página que estás buscando no existe</p>
        </div>
        <div className="justify-center flex-col flex items-center my-5 mx-auto">
          <TacoButton
            moreClasses="w-1/2 mx-auto"
            bgColor="300"
            callBack={() => console.log("going to landing page")}
            text="Volver al inicio"
          />
          <img className="my-10 w-80 self-center" src={BrokenTaco} alt="Taco" />
        </div>
      </div>
    </div>
  );
}
