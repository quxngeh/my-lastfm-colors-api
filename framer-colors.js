// Auto-generated Framer color updater
// Song: "WOW (Japanese version)" by IVE
// Generated: 12/1/2025, 9:02:55 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f4eafb",
  "secondary": "#8f39e4",
  "accent": "#c894f2",
  "muted": "#a28aba"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f4eafb');
    root.style.setProperty('--color-secondary', '#8f39e4');
    root.style.setProperty('--color-accent', '#c894f2');
    root.style.setProperty('--color-muted', '#a28aba');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}