import style from "@/app/ui/newsletter/styles/subscribe.module.css";
import Image from "next/image";

import InfoCard from "@/app/ui/newsletter/info-card";
import Form from "@/app/ui/newsletter/subscribe-form";
import Ilustration from "@/app/ui/newsletter/ilustration";

function Page() {
  return (
    <div className={style.container}>
      <div className={`${style.card} animate-slideInLeft`}>
        <div className={style.blueBlur} />
        <div className={style.formContainer}>
          <InfoCard />
          <Form />
        </div>
        <div className={style.imageContainer}>
          <Ilustration />
        </div>
      </div>
    </div>
  );
}

export default Page;
