import { MdAccountBalance } from "react-icons/md";
import TacoButton from "./commons/TacoButton";
import TacoButtonIcon from "./commons/TacoButtonIcon";
import TacoInput from "./commons/TacoInput";

function App() {
    return (
        <div className="grid grid-cols-2 bg-white">
            <div className="m-5">
                <h1 className="h1-nochero">Títulos h1</h1>
                <h2 className="h2-nochero">Títulos h2</h2>
                <h2 className="h3-nochero">Títulos h3</h2>
                <p className="p-nochero">
                    Esto es párrafo normal, donde puedo ingresar texto
                </p>
                <TacoButton
                    bgColor="100"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                />

                <TacoButton
                    bgColor="200"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                />

                <TacoButton
                    bgColor="300"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                    disabled
                />

                <TacoButton
                    bgColor="400"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                />

                <TacoButton
                    bgColor="500"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                />

                <TacoButtonIcon
                    bgColor="100"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                />

                <TacoButtonIcon
                    bgColor="200"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    disabled
                />

                <TacoButtonIcon
                    bgColor="300"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                />

                <TacoButtonIcon
                    bgColor="400"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    disabled
                />
                <TacoButtonIcon
                    bgColor="500"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                />
            </div>
            <div className="m-5">
                <TacoInput placeholder="Ingresa un texto" type="text" />
                <TacoInput
                    placeholder="Ingresa un texto"
                    type="text"
                    feedback="Textos vacíos"
                    state="error"
                />
                <TacoInput
                    placeholder="Ingresa un texto"
                    type="text"
                    state="correct"
                    disabled
                />
            </div>
        </div>
    );
}

export default App;
