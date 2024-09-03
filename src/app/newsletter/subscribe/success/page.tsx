import style from "@/app/ui/newsletter/styles/subscribe.module.css";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";

function Page() {
  return (
    <div className={style.container}>
      <div className={`${style.card} animate-slideInRight`}>
        <div className={style.blueBlur} />
        <div
          className={`${style.formContainerSuccess} text-start flex justify-center flex-wrap`}
        >
          <Image
            width={250}
            height={250}
            src={"/iconeBranco.svg"}
            alt="check"
          />
          <h1 className={`${style.title} ${inter} mt-10`}>
            Obrigado por se inscrever <br />
            na nossa newsletter!
          </h1>
          <p className={style.successSubtitle}>
            Agora você faz parte da comunidade Mindtech e está a um passo de
            ficar atualizado com as últimas inovações e tendências em Internet
            das Coisas (loT).
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

export default Page;
