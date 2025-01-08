"use client";

import React, { useRef, useState } from "react";
import clsx from "clsx";

import { useOutsideClick } from "@/hooks/useOutSideClick";
import MingcuteUpLine from "@/icons/MingcuteUpLine";
import MingcuteDownLine from "@/icons/MingcuteDownLine";

import style from "./select.module.css";

type SelectOption = {
  id: number;
  title: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  label?: string;
  error?: string;
  placeholder?: string;
  onChange?: (item: any) => void;
  className?: string;
};

export const Select = ({
  label,
  error,
  options,
  placeholder,
  className,
  onChange,
}: SelectProps) => {
  const [select, setSelect] = useState<SelectOption | null>(null);
  const [open, setOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(contentRef, () => setOpen(false));

  const handleOptionSelect = (item: SelectOption) => {
    setSelect(item);
    setOpen(false);
    onChange?.(item);
  };
  return (
    <div className={style.select_box}>
      <div className={open ? style.active : style.label}>{label}</div>
      <div
        className={clsx(
          `${style.select} ${style.border} ${open ? style.border_teal : style.border_neut} `,
          className,
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={style.selected}>
          <div
            className={`${style.title} ${open ? style.active : style.label}`}
          >
            {select ? select?.title : placeholder}
          </div>

          {open ? <MingcuteDownLine /> : <MingcuteUpLine />}
        </div>
      </div>
      {error && <div className={style.error}>{error}</div>}
      {open && (
        <div
          className={`${style.drop_down} ${style.border} ${style.border_neut}`}
          ref={contentRef}
        >
          {options?.map((item: SelectOption) => (
            <div
              key={item?.id}
              className={style.drop_down_items}
              onClick={() => handleOptionSelect(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
