import Image from "next/image";
import style from "./styles/subscribe.module.css";

export default function Ilustration() {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Image
          src="/Imagem.png"
          width={600}
          height={900}
          className={`${style.ilustration}`}
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
