// Auto-generated Framer color updater
// Song: "ETA" by NewJeans
// Generated: 2/22/2026, 9:04:34 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a6c7d5",
  "secondary": "#172127",
  "accent": "#994369",
  "muted": "#af984c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a6c7d5');
    root.style.setProperty('--color-secondary', '#172127');
    root.style.setProperty('--color-accent', '#994369');
    root.style.setProperty('--color-muted', '#af984c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}