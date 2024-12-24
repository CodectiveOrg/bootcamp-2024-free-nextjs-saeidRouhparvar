"use client";
import Link from "next/link";
import React from "react";
import style from "./header.module.css";
import { useTheme } from "@/app/hooks/useTheme";
import { Button } from "../uiKit/Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItem = [
  { id: 0, title: "خانه", href: "/" },
  { id: 1, title: "درباره ما", href: "/about" },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const pathName = usePathname();

  return (
    <header className={style.header}>
      <nav>
        <ul className="nav">
          {navItem.map((item: any) => (
            <li key={item?.id}>
              <Link
                href={item.href}
                className={clsx(pathName === item.href && style.active)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.cta}>
        <Button onClick={toggleTheme} size="md">
          ورود | ثبت نام
        </Button>
        <Button onClick={toggleTheme} variant="outline" size="md">
          {theme === "light" ? "Dark" : "Light"} Mode
        </Button>
      </div>
    </header>
  );
};

export default Header;
