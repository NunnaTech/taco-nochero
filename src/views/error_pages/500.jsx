import React from "react";
import Sign from "../../assets/svg/wet_floor.svg";
import TacoButton from "../../commons/TacoButton";
import { Link } from "react-router-dom";

export default function Page500() {
  return (
    <div className="flex h-screen  items-center justify-center ">
      <div className="card  text-center text-white shadow-sm p-5">
        <h1 className="text-center text-9xl font-bold">500</h1>
        <div className="m-1">
          <h2 className="text-4xl  font-bold">
            Suelo mojado, vuelve más tarde.
          </h2>
        </div>
        <div className="justify-center flex-col flex items-center my-5 mx-auto">
          <Link to="/">
            <TacoButton
              moreClasses="w-1/2 mx-auto"
              bgColor="300"
              callBack={() => console.log("going to landing page")}
              text="Volver al inicio"
            />
          </Link>
          <img className="my-10 w-80 self-center" src={Sign} alt="Sign" />
        </div>
      </div>
    </div>
  );
}
