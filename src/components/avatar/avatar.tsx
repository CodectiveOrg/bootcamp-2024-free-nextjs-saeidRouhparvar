import React from "react";
import Image from "next/image";

import style from "./avatar.module.css";

type AvatarProps = {
  src: string;
};

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className={style.avatar}>
      <img alt="" src={src} />
    </div>
  );
};

export default Avatar;
