import React, { HTMLAttributes, PropsWithChildren } from "react";
import style from "./tag.module.css";
import clsx from "clsx";

type TagProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    className?: string;
  };

const Tag = ({ children, className, ...rest }: TagProps) => {
  return (
    <div className={clsx(style.tag, className)} {...rest}>
      {children}
    </div>
  );
};

export default Tag;
