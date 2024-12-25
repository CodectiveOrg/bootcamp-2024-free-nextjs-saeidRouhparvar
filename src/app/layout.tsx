import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

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
      <body>
        <Header />
        <main>{children}</main>
        <p className="tag">
          نوبت دهی پزشکی، سامانه نوبت دهی اینترنتی بیمارستان و پزشکان
        </p>
        <Footer />
      </body>
    </html>
  );
}
