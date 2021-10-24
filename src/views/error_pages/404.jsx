import React from "react";
import {
  MdPeopleAlt,
  MdShoppingCart,
  MdOutlineAttachMoney,
  MdDataExploration,
  MdHomeFilled,
  MdPerson,
} from "react-icons/md";
import BrokenTaco from "../../assets/svg/broken_taco.svg";
import TacoButton from "../../commons/TacoButton";

export default function Page404() {
  return (
    <div className="flex h-screen  items-center justify-center">
      <div className="card text-center shadow-md">
        <h1 className="text-center text-9xl">404</h1>
        <div className="card-body">
          <h2 className="text-4xl m-1">Página no encontrada</h2>
          <p className="m-1">La página que estás buscando no existe</p>
          <div className="justify-center card-actions flex-col">
              <img className="m-2" src={BrokenTaco} alt="broken taco" />
                <TacoButton
                  className="m-10 p-10"
                  bgColor="400"
                  callBack={() => console.log("going to landing page")}
                  text="Volver al inicio"
                />
          </div>
        </div>
      </div>
    </div>
  );
}
