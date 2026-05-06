// Auto-generated Framer color updater
// Song: "Come To God" by Indigo De Souza
// Generated: 5/6/2026, 9:42:56 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#334658",
  "secondary": "#8ca4c1",
  "accent": "#a88081",
  "muted": "#a5a8a4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#334658');
    root.style.setProperty('--color-secondary', '#8ca4c1');
    root.style.setProperty('--color-accent', '#a88081');
    root.style.setProperty('--color-muted', '#a5a8a4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}