import React from "react";
import Alarm from "../../assets/svg/alarm_access.svg";
import TacoButton from "../../commons/TacoButton";

export default function Page403() {
  return (
    <div className="flex h-screen  items-center justify-center ">
      <div className="card  text-center text-white shadow-sm p-5">
        <h1 className="text-center text-9xl font-bold">403</h1>
        <div className="m-1">
          <h2 className="text-4xl  font-bold">
          No tienes acceso a este sitio
          </h2>
        </div>
        <div className="justify-center flex-col flex items-center my-5 mx-auto">
          <TacoButton
            moreClasses="w-1/2 mx-auto"
            bgColor="300"
            callBack={() => console.log("going to landing page")}
            text="Volver al inicio"
          />
          <img className="my-10 w-80 self-center" src={Alarm} alt="Alarm" />
        </div>
      </div>
    </div>
  );
}
