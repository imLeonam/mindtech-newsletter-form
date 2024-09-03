import Image from "next/image";
import style from "./styles/Subscribe.module.css";
import { inter } from "../fonts";

export default function InfoCard() {
  return (
    <>
      <h1 className={`${style.title} ${inter}`}>Inscreva-se agora!</h1>
      <p className={style.subtitle}>
        Preencha o formulário abaixo para se inscrever e comece a receber nossas
        atualizações diretamente em sua caixa de entrada.
      </p>
      <ul className={style.subscriptionInfos}>
        <li className={style.subscriptionInfoItem}>
          <Image
            alt="checkmark"
            src="/iconeAzul.svg"
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
            src="/iconeAzul.svg"
            width={30}
            height={30}
            className={style.checkmark}
          />
          <span>
            <strong>Notícias e Tendências:</strong> Fique por dentro das últimas
            novidades e avanços no mundo do IoT.
          </span>
        </li>
        <li className={style.subscriptionInfoItem}>
          <Image
            alt="checkmark"
            src="/iconeAzul.svg"
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
    </>
  );
}
