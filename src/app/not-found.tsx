import React from "react";

import error_404 from "@/assets/illustrations/404.png";

import style from "./not-found.module.css";
import Image from "next/image";
import GlobalSearch from "@/components/globalSearch/globalSearch";
const notFound = () => {
  return (
    <div className={style.not_found}>
      <div className={style.content}>
        <div className={style.data}>
          <div className={style.title}>404</div>
          <div className={style.desc}>صفحه مورد نظر پیدا نشد...!</div>
          <GlobalSearch />
        </div>
          <Image src={error_404} alt="" className="img" />
      </div>
    </div>
  );
};

export default notFound;
