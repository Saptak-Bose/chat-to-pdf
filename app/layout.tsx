import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import { DM_Sans } from "next/font/google";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat To PDF",
  description: "Made by Saptak Bose.",
};

export default function RootLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={clsx(
            "min-h-screen h-screen overflow-hidden flex flex-col",
            font.className
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
