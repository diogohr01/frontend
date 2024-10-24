import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Toaster } from "sonner";

// Caminho do logo no diretório public (sem o prefixo '/public')
const logoImgCafe = '/logoCafe.svg';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cantina - SENAI",
  description: "Generated by create next app",
  icons: {
    icon: logoImgCafe, // Caminho direto para o ícone no diretório public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
    
        <link rel="icon" href={logoImgCafe} type="image/svg+xml" sizes="any" />
      </head>
      <body className={inter.className}>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              backgroundColor: "#f1f1f1",
              color: "#131313",
              borderColor: "rgba(255,255,255,0.5)",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
