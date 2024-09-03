import style from "@/app/ui/newsletter/styles/subscribe.module.css";

import InfoCard from "@/app/ui/newsletter/info-card";
import Form from "@/app/ui/newsletter/subscribe-form";
import Ilustration from "@/app/ui/newsletter/ilustration";

function Page() {
  return (
    <div className={style.container}>
      <div
        className={`flex flex-nowrap flex-row sm:justify-center lg:justify-between items-center rounded-3xl sm:h-3/4 lg:h-4/5 lg:w-3/4
           sm:w-1/2 md:px-24 sm:ml-5 sm:mr-5 md:py-28 bg-slate-950 animate-slideInLeft`}
        style={{ marginLeft: 20, marginRight: 20 }}
      >
        <div className={style.blueBlur} />
        <div
          className="flex sm:justify-center lg:justify-start flex-col sm:w-full
           lg:w-2/5 py-10 px-10 z-10"
        >
          <InfoCard />
          <Form />
        </div>
        <div className="flex justify-end self-center z-10">
          <Ilustration />
        </div>
      </div>
    </div>
  );
}

export default Page;
