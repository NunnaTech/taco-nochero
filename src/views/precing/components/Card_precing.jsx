import { useState } from "react";
import TacoButton from "../../../commons/TacoButton";

const CardPrecing = ({ titulo, precio, list1, list2, list3,list4 ,titulo2,precio2, listt1,listt2,listt3,listt4}) => {
    return (
        <div className="hover:bg-gray-200 card text-center shadow-2xl"
            style={{
                backgroundColor: '#E5E5E5',
            }}>

            <div className="place-items-center card-body mt-5 content-center flex justify-items-center mr-2 ml-2">
                <h1 className="font-bold text-black text-2xl">
                    {titulo}  {titulo2}
                </h1>
                <p className="text-center my-3 text-black">
                    {precio} {precio2}
                </p>
                <ol className="list-disc pl-10 p-nochero text-black">
                    <li>{list1}{listt1}</li>
                    <li>{list2}{listt2}</li>
                    <li>{list3}{listt3}</li>
                    <li>{list4}{listt4}</li>
                </ol>
                <br />
                <TacoButton
                    bgColor="500"
                    moreClasses="font-semibold"
                    callBack={() => { }}
                    text="Adquirir"
                />
            </div>
        </div>
    )
}

export default CardPrecing;