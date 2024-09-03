import React from "react";
import style from "@/app/ui/newsletter/styles/Subscribe.module.css";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";

function Page() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.blueBlur} />
        <div className={style.formContainer}>
          <h1 className={`${style.title} ${inter}`}>Inscreva-se agora!</h1>
          <p className={style.subtitle}>
            Preencha o formulário abaixo para se inscrever e comece a receber
            nossas atualizações diretamente em sua caixa de entrada.
          </p>
          <ul className={style.subscriptionInfos}>
            <li className={style.subscriptionInfoItem}>
              <Image
                alt="checkmark"
                src="/icone.svg"
                width={30}
                height={30}
                className={style.checkmark}
              />
              <span>
                <strong>Guias e Tutoriais:</strong> Aprenda como implementar e
                otimizar soluções de IoT para sua empresa.
              </span>
            </li>
            <li className={style.subscriptionInfoItem}>
              <Image
                alt="checkmark"
                src="/icone.svg"
                width={30}
                height={30}
                className={style.checkmark}
              />
              <span>
                <strong>Notícias e Tendências:</strong> Fique por dentro das
                últimas novidades e avanços no mundo do IoT.
              </span>
            </li>
            <li className={style.subscriptionInfoItem}>
              <Image
                alt="checkmark"
                src="/icone.svg"
                width={30}
                height={30}
                className={style.checkmark}
              />
              <span>
                <strong>Ofertas e Promoções:</strong> Receba ofertas especiais e
                promoções exclusivas para assinantes da nossa newsletter.
              </span>
            </li>
          </ul>

          <form>
            <label className={style.emailLabel} htmlFor="email">
              E-mail
            </label>
            <input
              className={`${style.emailInput} border text-md border-gray-200 outline-2 placeholder:text-gray-300`}
              type="email"
              id="email"
              placeholder="email@email.com"
            />
            <button className={style.submit} type="submit">
              Inscrever-se
            </button>
          </form>
        </div>
        <div className={style.imageContainer}>
          <Image
            src="/Imagem.png"
            width={600}
            height={900}
            className={`${style.ilustration}  sm:hidden md:block`}
            alt="IoT"
          />
          <Image
            src="/logo-mindtech.svg"
            width={200}
            height={200}
            className={`${style.logo} sm:hidden md:block`}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
