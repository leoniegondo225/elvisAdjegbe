// ThemeScript — PAS de "use client" ici !
// Ce composant doit s'exécuter côté SERVEUR pour être injecté dans le <head>
// Le script inline s'exécute avant React pour éviter le flash de thème

export default function ThemeScript() {
  // Script qui lit localStorage et applique data-theme immédiatement
  // IIFE = Immediately Invoked Function Expression (s'exécute tout seul)
  const scriptContenu = `
    (function() {
      try {
        var theme = localStorage.getItem('portfolio-theme');
        if (theme === 'light' || theme === 'dark') {
          document.documentElement.setAttribute('data-theme', theme);
        } else {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      } catch(e) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: scriptContenu }}
      suppressHydrationWarning
    />
  );
}
