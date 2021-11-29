import React from "react";
import { useState } from "react";

import TacoButton from "../../commons/TacoButton";
import CardShoppingPayment from "../shopping_cart/shopping_components/CardShoppingPayment";
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
    <div class="bg-gray-300 mx-auto max-w-7xl  rounded py-6 px-2 lg:px-6 shadow-xl mb-24">
      <div class="bg-gray-100 shadow-xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="-mx-12 md:flex mb-6">
          <div class="md:w-full px-3">
            <Step step={step} />
          </div>
        </div>
        <div class="-mx-5 md:flex mb-6">
          <div class="md:w-1/2 px-1 mb-6 md:mb-0 ">
            <div class="flex flex-col bg-nochero-500">
              <BodySelector step={step} />
            </div>
          </div>
          <div class="md:w-1/2 px-1 mb-6 md:mb-0 ">
            <CardShoppingPayment />
          </div>
        </div>
        <div class="mx-2 flex flex-row justify-between  md:flex">
          <TacoButton
            moreClasses="max-w-min hover:bg-gray-700"
            bgColor="500"
            callBack={() => onGoBack()}
            text="Regresar"
          />
          <TacoButton
            moreClasses="max-w-min hover:bg-nochero-300"
            bgColor="400"
            callBack={() => onNext()}
            text="Continuar"
          />
        </div>
      </div>
    </div>
  );
}

function Step({ step }) {
  const completed = "step step-success  ";
  const start = "step r";
  return (
    <ul class="w-full steps my-2 text-gray-500 font-bold">
      <li class={step >= 1 ? start + completed : start}>Detalles</li>
      <li class={step >= 2 ? start + completed : start}>Envío</li>
      <li class={step >= 3 ? start + completed : start}>Pago</li>
      <li class={step >= 4 ? start + completed : start}>Confirmar</li>
    </ul>
  );
}

function BodySelector({ step }) {
  switch (step) {
    case 1:
      return <Details />;
    case 2:
      return <Delivery />;
    case 3:
      return <Payment />;
    case 4:
      return <Confirmation />;
    default:
      return <Confirmation />;
  }
}
