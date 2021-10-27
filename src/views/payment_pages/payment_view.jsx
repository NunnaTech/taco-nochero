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
    <div class="hero min-h-screen bg-base-200">
      <div class="flex-col justify-center hero-content lg:flex-row shadow-2xl card">
        <div class=" bg-red-900 p-8">
          <Step step={step} />
          <div class="divider">
          <BodySelector step={step} />

          <div class="flex flex-row bg-gray-50 ">
            <TacoButton
              moreClasses="w-1/2 p-1"
              bgColor="300"
              callBack={() => onGoBack()}
              text="Regresar"
            />
            <TacoButton
              moreClasses="w-1/2 p-1"
              bgColor="300"
              callBack={() => onNext()}
              text="Continuar"
            />
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a href="#" class="label-text-alt">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <input type="button" value="Login" class="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
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
      return <Delivery />;
    case 3:
      return <Payment />;
    case 4:
      return <Confirmation />;
    default:
      return <Details />;
  }
}
