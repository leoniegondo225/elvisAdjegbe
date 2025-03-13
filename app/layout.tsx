"use client"
import "bootstrap/dist/css/bootstrap.css"
import "@/css/style.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l&#39;animation en ms
      easing: "ease-in-out",
      once: true, // Exécuter une seule fois l&#39;animation
    });
  }, []);
  return (
    <html lang="fr">
    <meta charSet="UTF-8"/>
      <body>
        {children}
      </body>
    </html>
  );
}
