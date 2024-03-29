import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import RestaurantHeader from "@/componets/restaurantHeader";
import RestaurantFooter from "@/componets/RestaurantFooter";
import RestaurantHeader from "@/componets/RestaurantHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <RestaurantHeader/>
        {children}
        <RestaurantFooter/>
        </body>
    </html>
  );
}
