// Auto-generated Framer color updater
// Song: "WOKE UP" by XG
// Generated: 11/15/2025, 9:01:06 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c8aa8d",
  "secondary": "#1b1a1f",
  "accent": "#813d3d",
  "muted": "#916441"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c8aa8d');
    root.style.setProperty('--color-secondary', '#1b1a1f');
    root.style.setProperty('--color-accent', '#813d3d');
    root.style.setProperty('--color-muted', '#916441');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}