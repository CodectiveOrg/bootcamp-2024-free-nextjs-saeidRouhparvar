import React, { PropsWithChildren, HTMLAttributes } from "react";

import style from "./mainBox.module.css";
import clsx from "clsx";

type MainBoxProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    className?: string;
  };

const MainBox = ({ children, className, ...rest }: MainBoxProps) => {
  return (
    <div className={clsx(style.main, className)} {...rest}>
      {children}
    </div>
  );
};

export default MainBox;
