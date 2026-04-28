// Auto-generated Framer color updater
// Song: "Te Quiero" by Kiss of Life
// Generated: 4/28/2026, 9:42:54 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#4b554d",
  "secondary": "#d2d1db",
  "accent": "#8ab0c8",
  "muted": "#a8caba"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#4b554d');
    root.style.setProperty('--color-secondary', '#d2d1db');
    root.style.setProperty('--color-accent', '#8ab0c8');
    root.style.setProperty('--color-muted', '#a8caba');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}