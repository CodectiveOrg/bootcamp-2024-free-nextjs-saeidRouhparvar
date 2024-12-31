"use client";
import Link from "next/link";
import React from "react";
import { useTheme } from "@/app/hooks/useTheme";
import { Button } from "../uiKit/Button";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MingcuteMoonLine from "@/icons/MingcuteMoonLine";
import MingcuteSunLine from "@/icons/MingcuteSunLine";

import style from "./header.module.css";

type NavItem = {
  id: number;
  title: string;
  href: string;
};

const navItem: NavItem[] = [
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
          {navItem.map((item) => (
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
        <Button onClick={toggleTheme} className={style.theme} variant="outline">
          {theme === "light" ? (
            <MingcuteMoonLine fontSize={28} color="#38b2ac" />
          ) : (
            <MingcuteSunLine fontSize={28} color="#38b2ac" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
