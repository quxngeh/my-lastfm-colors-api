// Auto-generated Framer color updater
// Song: "HOT" by LE SSERAFIM
// Generated: 10/9/2026, 3:36:46 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d2a37a",
  "secondary": "#403e46",
  "accent": "#8a3720",
  "muted": "#f1e9d1"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d2a37a');
    root.style.setProperty('--color-secondary', '#403e46');
    root.style.setProperty('--color-accent', '#8a3720');
    root.style.setProperty('--color-muted', '#f1e9d1');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}