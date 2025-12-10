// Auto-generated Framer color updater
// Song: "Fabulous" by TAEYEON
// Generated: 12/10/2025, 9:02:47 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d2d2d3",
  "secondary": "#262425",
  "accent": "#8c8c8c",
  "muted": "#848484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d2d2d3');
    root.style.setProperty('--color-secondary', '#262425');
    root.style.setProperty('--color-accent', '#8c8c8c');
    root.style.setProperty('--color-muted', '#848484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}