// Configuration Next.js — paramètres du projet
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Désactiver le mode strict React (évite les doubles renders en dev)
  reactStrictMode: false,

  // Optimisation des images Next.js
  images: {
    // Formats modernes supportés
    formats: ["image/avif", "image/webp"],
    // Domaines autorisés pour les images externes (si besoin)
    remotePatterns: [],
  },

  // Supprimer les headers X-Powered-By pour la sécurité
  poweredByHeader: false,

  // Redirections : /portfolio → / pour les anciens liens
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
