import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";

import idk from "@/assets/logo/idk.svg";
import nomaad from "@/assets/logo/nomaad.svg";
import nomad from "@/assets/logo/nomad.svg";

import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";

import style from "./footer.module.css";

type LogoItem = {
  id: number;
  src: string;
  alt: string;
};

const logos: LogoItem[] = [
  { id: 0, src: idk, alt: "idk" },
  { id: 1, src: nomad, alt: "nomad" },
  { id: 2, src: nomaad, alt: "nomaad" },
];
const social = [
  { id: 0, item: <MingcuteYoutubeFill className="svg" /> },
  { id: 1, item: <MingcuteTelegramFill className="svg" /> },
  { id: 2, item: <MingcuteLinkedinFill className="svg" /> },
];

const Footer = (): ReactElement => {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.writings}>
          <div className={style.logo}>استایم</div>
          <p className={style.description}>
            تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
            ایران
          </p>
        </div>
        <div className={style.visuals}>
          <ul className={style.certificate}>
            {logos.map((item) => (
              <li key={item.id}>
                <Link href={"#"}>
                  <Image style={{ padding: 0 }} src={item.src} alt={item.alt} />
                </Link>
              </li>
            ))}
          </ul>
          <ul className={style.social}>
            {social.map((item) => (
              <li key={item.id}>
                <Link href={"#"}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <p className={style.copy}>
          تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق
          به شرکت سپهر سلامت کویر ایساتیس می‌باشد.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
