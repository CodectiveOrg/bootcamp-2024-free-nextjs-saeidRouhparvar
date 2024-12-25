"use client";

import GlobalSearch from "@/components/globalSearch/globalSearch";
import style from "./page.module.css";
import MingcuteStethoscopeLine from "@/logo/MingcuteStethoscopeLine";
 const Home = () => {
  return (
    <div className={style.home}>
      <h1>
        <MingcuteStethoscopeLine />
        استایم
      </h1>
      <GlobalSearch />
      <div className={style.history}>
        <div className={style.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>مغز و اعصاب</li>
          <li>گوارش </li>
        </ul>
      </div>
    </div>
  );
}
export default Home