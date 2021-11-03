import React from "react";
import { useState } from "react";

import { MdDelete } from "react-icons/md";
import TacoButton from "../../commons/TacoButton";
import TacoInput from "../../commons/TacoInput";
import TacoButtonIcon from "../../commons/TacoButtonIcon";
import Details from "./Details";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Confirmation from "./Confirmation";

export default function PaymentPage() {
  const [step, setStep] = useState(0);
  const onChange = (nextStep) => {
    console.log("onChange ->", step);
    setStep(setStep < 0 ? 0 : nextStep > 3 ? 4 : nextStep);
  };
  const onNext = () => (step < 0 ? onChange(step + 2) : onChange(step + 1));
  const onGoBack = () => (step >= 1 ? onChange(step - 1) : null);

  return (
    <div class="bg-gray-100 mx-auto max-w-6xl  py-10 px-6 lg:px-6 shadow-xl mb-24">
      <form>
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3 bg-black">
              <Step step={step} />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0 bg-warning">
              <div class="flex flex-col bg-black">
                <BodySelector step={step} />

                <div class="p-10 flex flex-row bg-gray-50 ">
                  <TacoButton
                    moreClasses="w-1/2 p-1"
                    bgColor="500"
                    callBack={() => onGoBack()}
                    text="Regresar"
                  />
                  <TacoButton
                    moreClasses="w-1/2 p-1"
                    bgColor="500"
                    callBack={() => onNext()}
                    text="Continuar"
                  />
                </div>
              </div>
            </div>
            <div class="md:w-1/2 px-3 bg-success">
              2
              <Step step={step} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function Step({ step }) {
  const completed = "step-primary";
  const start = "step ";
  return (
    <ul class="w-full steps my-5">
      <li class={step >= 1 ? start + completed : start}>Detalles</li>
      <li class={step >= 2 ? start + completed : start}>Envío</li>
      <li class={step >= 3 ? start + completed : start}>Pago</li>
      <li class={step >= 4 ? start + completed : start}>Confirmar</li>
    </ul>
  );
}

function BodySelector({ step }) {
  switch (step) {
    case 2:
      return <Details />;
    case 3:
      return <Delivery />;
    case 4:
      return <Payment />;
    default:
      return <Confirmation />;
  }
}
