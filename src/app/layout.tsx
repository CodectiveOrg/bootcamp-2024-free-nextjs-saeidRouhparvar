import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";

export const metadata: Metadata = {
  title: "استایم",
  description: "پلتفرم رزرو آنلاین نوبت دکتر",
};

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
