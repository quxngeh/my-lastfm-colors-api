// Auto-generated Framer color updater
// Song: "Cramps" by Slow Pulp
// Generated: 8/14/2026, 9:48:02 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#925b57",
  "secondary": "#203427",
  "accent": "#b597bf",
  "muted": "#e6d75c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#925b57');
    root.style.setProperty('--color-secondary', '#203427');
    root.style.setProperty('--color-accent', '#b597bf');
    root.style.setProperty('--color-muted', '#e6d75c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}