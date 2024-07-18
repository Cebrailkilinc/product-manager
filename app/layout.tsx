import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/core/provider/react-query-provider";
import { GlobalContextProvider } from "@/module/product-manager/context/store";
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
        <GlobalContextProvider>
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
