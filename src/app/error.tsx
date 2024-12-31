"use client";

import React from "react";
import error_ from "@/assets/illustrations/error.png";
import style from "./error.module.css";
import Image from "next/image";
import { Button } from "@/components/uiKit/Button";
type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <>
      <div className={style.not_found}>
        <div className={style.content}>
          <div className={style.data}>
            <div className={style.title}>خطای ناشناخته...!!!!!!!!!</div>
            <div className={style.desc}>لطفا با پشتیبانی تماس بگیرید.</div>
            <Button onClick={reset}>Rset</Button>
            <div className={style.trace}>
              <details>
                <summary>لاگ</summary>
                <pre dir="rtl">{error.stack}</pre>
              </details>
            </div>
          </div>
          <Image src={error_} alt="" className="img" />
        </div>
      </div>
    </>
  );
};

export default Error;
