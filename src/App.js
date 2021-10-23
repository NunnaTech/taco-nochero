import "../src/assets/css/tailwind.css";
import { MdAccountBalance } from "react-icons/md";
import TacoButton from "./commons/TacoButton";
import TacoButtonIcon from "./commons/TacoButtonIcon";
import TacoInput from "./commons/TacoInput";

function App() {
    return (
        <div className="grid grid-cols-2 m-5">
            <div className="">
                <h1 className="text-4xl font-bold">Botones</h1>
                <TacoButton
                    bgColor="100"
                    textColor
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                    disabled
                />

                <TacoButton
                    bgColor="200"
                    textColor
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                />

                <TacoButton
                    bgColor="300"
                    textColor
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                    disabled
                />

                <TacoButton
                    bgColor="400"
                    textColor="text-white"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                />

                <TacoButton
                    bgColor="500"
                    textColor="text-white"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    text="Acción"
                />

                <h1 className="text-2xl font-bold">Solo iconos</h1>

                <TacoButtonIcon
                    bgColor="100"
                    textColor
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                />

                <TacoButtonIcon
                    bgColor="200"
                    textColor
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    disabled
                />

                <TacoButtonIcon
                    bgColor="300"
                    textColor
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                />

                <TacoButtonIcon
                    bgColor="400"
                    textColor="text-white"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                    disabled
                />
                <TacoButtonIcon
                    bgColor="500"
                    textColor="text-white"
                    Icon={() => <MdAccountBalance />}
                    callBack={() => console.log("función")}
                />
            </div>
            <div>
                <h1 className="text-4xl font-bold">Cuadros de texto</h1>
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
