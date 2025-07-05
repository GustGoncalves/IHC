import type { Metadata } from "next";
import { Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

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
      <head>
        <Script
          id="hotjar-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6406339,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-amber-50">
        <header className="fixed top-0 left-0 w-full bg-amber-900 p-4 z-50 shadow-md border-b border-amber-700">
          <Header />
        </header>
        <main className="flex-grow pt-35 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
