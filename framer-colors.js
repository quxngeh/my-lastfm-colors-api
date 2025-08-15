// Auto-generated Framer color updater
// Song: "ETA" by NewJeans
// Generated: 8/15/2025, 9:01:06 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a8c7d5",
  "secondary": "#1e222a",
  "accent": "#8b4561",
  "muted": "#a38857"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a8c7d5');
    root.style.setProperty('--color-secondary', '#1e222a');
    root.style.setProperty('--color-accent', '#8b4561');
    root.style.setProperty('--color-muted', '#a38857');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}