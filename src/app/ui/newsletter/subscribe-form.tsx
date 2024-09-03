"use client";
import { useFormState } from "react-dom";

import style from "./styles/subscribe.module.css";
import { Button } from "../button";

import { createNewsletterRegister, sleep } from "@/app/lib/actions";

export default function Form() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(
    createNewsletterRegister,
    initialState
  );

  const handleTransition = async () => {
    const card = document.querySelector(".subscribe_card__qgvYG");
    console.log(card);
    card?.classList.add("animate-slideOutLeft");

    await sleep(500);
  };

  return (
    <>
      <form action={dispatch}>
        <label className={style.emailLabel} htmlFor="email">
          E-mail
        </label>
        <div className="relative mt-2 rounded-md">
          <div className="relative">
            <input
              className={`${style.emailInput} border text-md border-gray-200 outline-2 placeholder:text-gray-300`}
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
              aria-describedby="email-error"
            />
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.email &&
              state.errors.email.map((error: string) => (
                <p
                  className="mt-2 text-sm text-red-500 animate-shake"
                  key={error}
                >
                  {error}
                </p>
              ))}
          </div>
        </div>
        <Button onClick={handleTransition} type="submit">
          Inscrever-se
        </Button>
      </form>
    </>
  );
}
