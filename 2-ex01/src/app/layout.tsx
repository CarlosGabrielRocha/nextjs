import "./globals.css";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight:["300", "400", "500", "700"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
