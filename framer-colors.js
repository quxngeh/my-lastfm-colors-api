// Auto-generated Framer color updater
// Song: "ETA" by NewJeans
// Generated: 8/6/2025, 9:04:12 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a6c2d1",
  "secondary": "#1f5666",
  "accent": "#8a455a",
  "muted": "#bb9057"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a6c2d1');
    root.style.setProperty('--color-secondary', '#1f5666');
    root.style.setProperty('--color-accent', '#8a455a');
    root.style.setProperty('--color-muted', '#bb9057');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}