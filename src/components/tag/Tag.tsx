import React, { HTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

import style from "./tag.module.css";
import MingcuteCloseLine from "@/icons/MingcuteCloseLine";

type TagProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    className?: string;
    onClick?: () => void;
  };

const Tag = ({ children, className, onClick, ...rest }: TagProps) => {
  return (
    <div className={clsx(style.tag, className)} {...rest}>
      {children}
      {onClick && (
        <MingcuteCloseLine onClick={onClick} className={style.close} />
      )}
    </div>
  );
};

export default Tag;
