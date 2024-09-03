import Image from "next/image";
import style from "@/app/ui/newsletter/styles/subscribe.module.css";
import { inter } from "@/app/ui/fonts";

import { deleteNewsletterRegister } from "@/app/lib/actions";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const data = await deleteNewsletterRegister(id);

  if (data.errors) {
    notFound();
  }

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
            src={"/sadFaceIcon.svg"}
            alt="check"
          />
          <h1 className={`${style.title} ${inter} mt-10`}>
            Você se inscreveu <br />
            da nossa newsletter.
          </h1>
          <p className={style.successSubtitle}>
            Agora você não faz mais parte da comunidade Mindtech. Você não terá
            mais atualizações sobre as últimas inovações e tendências da
            Internet das Coisas (loT).
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
