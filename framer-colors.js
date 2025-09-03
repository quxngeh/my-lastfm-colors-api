// Auto-generated Framer color updater
// Song: "Eve, Psyche & The Bluebeard’s wife" by LE SSERAFIM
// Generated: 9/3/2025, 9:01:16 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a8133b",
  "secondary": "#23110a",
  "accent": "#dcd2c2",
  "muted": "#7c7c7c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a8133b');
    root.style.setProperty('--color-secondary', '#23110a');
    root.style.setProperty('--color-accent', '#dcd2c2');
    root.style.setProperty('--color-muted', '#7c7c7c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}