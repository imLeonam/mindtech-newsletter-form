import style from "@/app/ui/newsletter/styles/subscribe.module.css";
import Image from "next/image";
import { inter } from "@/app/ui/fonts";

function Page() {
  return (
    <div className={style.container}>
      <div className={`${style.card} animate-slideInRight`}>
        <div className={style.blueBlur} />
        <div
          className={`text-start flex flex-1 lg:p-10 sm:w-3/4 lg:w-3/5 items-center justify-center flex-col flex-wrap z-10`}
        >
          <Image
            className="sm:p-10 lg:w-64"
            width={250}
            height={250}
            src={"/iconeBranco.svg"}
            alt="check"
          />
          <h1 className={`${style.successTitle} ${inter} mt-10 mb-5`}>
            Obrigado por se inscrever <br className="sm:hidden lg:block" /> na
            nossa newsletter!
          </h1>
          <p className={`${style.successSubtitle} md:w-2/4`}>
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
