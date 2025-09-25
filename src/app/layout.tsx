import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "By Hour - Art Portfolio",
  description: "Digital art portfolio by Hour Ahmed (By Hour)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
