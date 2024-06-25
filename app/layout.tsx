import type { Metadata } from "next";
import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import { dbconfig } from "./utils/dbconfig";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight:"300" ,style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Management App",
  description: "Manage all your project in one place",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbconfig()
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
