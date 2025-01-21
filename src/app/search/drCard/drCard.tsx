import React from "react";

import style from "./drCard.module.css";
import { Button } from "@/components/uiKit/Button";
import Avatar from "@/components/avatar/avatar";

import MainBox from "@/components/mainBox/mainBox";
import Tag from "@/components/tag/Tag";

type DrCardProps = {
  avatar: string;
  drName: string;
  drDesc: string;
  address: string;
  tag: string[];
};

const DrCard = ({ avatar, drName, drDesc, address, tag }: DrCardProps) => {
  return (
    <MainBox className={style.main}>
      <div className={style.main_content}>
        <div className={style.avatar}>
          <Avatar src={avatar} />
        </div>
        <div className={style.data}>
          <div className={style.dr_name}>{drName}</div>
          <div className={style.desc}>{drDesc}</div>
        </div>
      </div>

      <div className={style.address_tag}>
        <div>{address}</div>
        <div className={style.tags}>
          {tag?.map((item: string, index) => <Tag key={index}>{item}</Tag>)}
        </div>
      </div>
      <div className={style.btns}>
        <Button>ویزیت آنلاین</Button>
        <Button>نوبت اینترنتی</Button>
      </div>
    </MainBox>
  );
};

export default DrCard;
