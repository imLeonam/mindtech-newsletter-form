import Image from "next/image";
import style from "./styles/subscribe.module.css";

export default function Ilustration() {
  return (
    <>
      <div className="lg:flex flex-col w-full items-center hidden">
        <Image
          src="/Imagem.png"
          width={550}
          height={900}
          className={style.ilustration}
          alt="IoT"
        />
        <Image
          src="/logo-mindtech.svg"
          width={200}
          height={200}
          className={`${style.logo} static`}
          alt="logo"
        />
      </div>
    </>
  );
}
