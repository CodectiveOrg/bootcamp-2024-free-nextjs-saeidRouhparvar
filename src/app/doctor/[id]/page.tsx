import { doctors } from "@/config/doctor";
import { DoctorModel } from "@/types/doctor.model";
import { notFound } from "next/navigation";
import React, { ReactElement } from "react";

import style from "./doctor.module.css";
import Avatar from "@/components/avatar/avatar";
import { Button } from "@/components/uiKit/Button";

type Props = {
  params: { id: string };
};

const Page = async ({ params }: Props): Promise<ReactElement> => {
  const doctor = await getDoctor(params.id);

  if (!doctor) return notFound();

  return (
    <div className={style.doctor}>
      <div className={style.avatar}>
        <Avatar src={`https://cdn.paziresh24.com/${doctor.image}`} />
        <div className={style.desc}>
          <div className={style.title}>{doctor.name}</div>
          <div className={style.brief}>{doctor.brief}</div>
          <div className={style.rates}>
            <div className={style.rate}>{doctor.averageRating} از 5</div>
            <div className={style.rate}>{doctor.totalVotes} نظر</div>
          </div>
          <div className={style.badge}>{doctor.badges} از 5</div>
        </div>
      </div>
      <div className={style.visit}>
        <Button>ویزیت</Button>
      </div>
    </div>
  );
};

export default Page;

const getDoctor = async (id: string): Promise<DoctorModel | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = doctors.find((i) => i.id === id);
      resolve(res);
    }, 3000);
  });
};
