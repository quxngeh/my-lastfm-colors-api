// Auto-generated Framer color updater
// Song: "Pandora" by Kara
// Generated: 11/17/2026, 5:56:15 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#5066a3",
  "secondary": "#dbe0eb",
  "accent": "#2c2b2b",
  "muted": "#a7b5d5"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#5066a3');
    root.style.setProperty('--color-secondary', '#dbe0eb');
    root.style.setProperty('--color-accent', '#2c2b2b');
    root.style.setProperty('--color-muted', '#a7b5d5');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}