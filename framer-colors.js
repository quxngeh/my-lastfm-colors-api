// Auto-generated Framer color updater
// Song: "SUPERWOMAN" by Unis
// Generated: 11/12/2025, 9:01:50 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b87092",
  "secondary": "#35152c",
  "accent": "#efdbea",
  "muted": "#6c253d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b87092');
    root.style.setProperty('--color-secondary', '#35152c');
    root.style.setProperty('--color-accent', '#efdbea');
    root.style.setProperty('--color-muted', '#6c253d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}