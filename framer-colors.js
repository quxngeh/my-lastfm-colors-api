// Auto-generated Framer color updater
// Song: "Like A Flower" by Irene
// Generated: 6/16/2026, 10:33:17 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#72868e",
  "secondary": "#d8e3e0",
  "accent": "#b9cfcc",
  "muted": "#a5c2cc"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#72868e');
    root.style.setProperty('--color-secondary', '#d8e3e0');
    root.style.setProperty('--color-accent', '#b9cfcc');
    root.style.setProperty('--color-muted', '#a5c2cc');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}