import Image from "next/image";
import style from "@/app/ui/newsletter/styles/subscribe.module.css";
import { inter } from "@/app/ui/fonts";

export default async function NotFound() {
  return (
    <div className={style.container}>
      <div className={`${style.card} animate-slideInRight`}>
        <div className={style.blueBlur} />
        <div
          className={`${style.formContainerSuccess} flex-col text-center flex justify-center items-center flex-wrap`}
        >
          <Image
            width={250}
            height={250}
            src={"/sadFaceIcon.svg"}
            alt="check"
          />
          <h1 className={`${style.title} ${inter} mt-10`}>Erro 404</h1>
          <p className={style.successSubtitle}>
            Email não foi encontrado na base de dados.
          </p>
          <Image
            src={"/logo-mindtech.svg"}
            alt="logo"
            className="mt-10"
            width={220}
            height={220}
          />
        </div>
      </div>
    </div>
  );
}
