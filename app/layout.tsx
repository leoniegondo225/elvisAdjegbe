// Layout racine — Server Component
import "@/css/style.css"
import "aos/dist/aos.css";
import { ContexteProvider } from "@/context/ThemeContext";
import ClientInit  from "@/component/ClientInit";
import ThemeScript from "@/component/ThemeScript";
import Toast       from "@/component/Toast";
import BoutonHaut  from "@/component/BoutonHaut";

export const metadata = {
  title: "Elvis Adjegbe — Multimédia & Design",
  description: "Portfolio d'Elvis Adjegbe, expert multimédia basé à Abidjan, Côte d'Ivoire.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Syne:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="curseur"        className="curseur"        aria-hidden="true"></div>
        <div id="curseur-cercle" className="curseur-cercle" aria-hidden="true"></div>

        <ContexteProvider>
          <ClientInit />
          <Toast />
          <BoutonHaut />
          {children}
        </ContexteProvider>
      </body>
    </html>
  );
}
