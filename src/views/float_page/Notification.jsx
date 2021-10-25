import React from "react";

export default function Notification() {
    return (
        <div className="fixed bottom-28 -right-0">
            <div className="bg-gray-100 flex flex-wrap flex-col w-96 h-96 rounded-md border">
                <h2 className="h2-nochero text-center bg-nochero-300">
                    Notificaciones
                </h2>
                <div className="text-black text-center">
                    <p className="bg-gray-200 mx-auto w-11/12 my-3 p-1">
                        Tu orden ha sido tomada
                    </p>

                    <p className="bg-gray-200 mx-auto w-11/12 my-3 p-1">
                        Tu orden ha sido enviada
                    </p>
                </div>
            </div>
        </div>
    );
}
