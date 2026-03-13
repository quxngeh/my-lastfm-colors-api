// Auto-generated Framer color updater
// Song: "FEMININE ENERGY" by Cobrah
// Generated: 3/13/2026, 9:09:26 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#161414",
  "secondary": "#b8b3b7",
  "accent": "#848488",
  "muted": "#817c84"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#161414');
    root.style.setProperty('--color-secondary', '#b8b3b7');
    root.style.setProperty('--color-accent', '#848488');
    root.style.setProperty('--color-muted', '#817c84');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}