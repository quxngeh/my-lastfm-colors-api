// Auto-generated Framer color updater
// Song: "Raining Men (feat. Nicki Minaj)" by Rihanna
// Generated: 7/21/2026, 10:53:38 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e17d86",
  "secondary": "#1f0881",
  "accent": "#aa1172",
  "muted": "#fbbca0"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e17d86');
    root.style.setProperty('--color-secondary', '#1f0881');
    root.style.setProperty('--color-accent', '#aa1172');
    root.style.setProperty('--color-muted', '#fbbca0');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}