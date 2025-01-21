import React from "react";
import Image from "next/image";

import style from "./avatar.module.css";

type AvatarProps = {
  src: string;
};

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className={style.avatar}>
      <Image alt="" src={src} width={80} height={80} />
    </div>
  );
};

export default Avatar;
