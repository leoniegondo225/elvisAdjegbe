"use client"
import "bootstrap/dist/css/bootstrap.css"
import "@/css/style.css"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="fr">
    <meta charSet="UTF-8"/>
      <body>
        {children}
      </body>
    </html>
  );
}
