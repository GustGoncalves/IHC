import type { Metadata } from "next";
import { Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Heder";

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-mono",
});

export const metadata: Metadata = {
  title: "Farolzinho do Vale - Almenara/MG",
  description:
    "Descubra as belezas e cultura de Almenara no Vale do Jequitinhonha",
  keywords: ["Almenara", "Turismo", "Vale do Jequitinhonha", "Minas Gerais"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${rubikMonoOne.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-amber-50">
        <header className="fixed top-0 left-0 w-full bg-amber-900 p-4 z-50 shadow-md border-b border-amber-700">
          <Header />
        </header>
        <main className="flex-grow pt-24">{children}</main>
        <footer className="bg-amber-900 text-amber-100 py-8 text-center mt-auto">
          <div className="max-w-7xl mx-auto px-4">
            <p className="mb-2">
              Farolzinho do Vale © {new Date().getFullYear()} - Almenara/MG
            </p>
            <p className="text-sm text-amber-300">
              Terra de cultura, tradição e belezas naturais
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
