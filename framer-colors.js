// Auto-generated Framer color updater
// Song: "Eve, Psyche & The Bluebeard’s wife" by LE SSERAFIM
// Generated: 12/18/2025, 9:03:16 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a7133b",
  "secondary": "#23110a",
  "accent": "#dbd1c2",
  "muted": "#747474"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a7133b');
    root.style.setProperty('--color-secondary', '#23110a');
    root.style.setProperty('--color-accent', '#dbd1c2');
    root.style.setProperty('--color-muted', '#747474');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}