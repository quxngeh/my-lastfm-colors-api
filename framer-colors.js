// Auto-generated Framer color updater
// Song: "CELEBRATION" by LE SSERAFIM
// Generated: 10/22/2026, 2:08:36 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#dcecf9",
  "secondary": "#96bfeb",
  "accent": "#a6aaad",
  "muted": "#b0b5b4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#dcecf9');
    root.style.setProperty('--color-secondary', '#96bfeb');
    root.style.setProperty('--color-accent', '#a6aaad');
    root.style.setProperty('--color-muted', '#b0b5b4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}