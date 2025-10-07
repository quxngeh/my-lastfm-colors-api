// Auto-generated Framer color updater
// Song: "Eve, Psyche & The Bluebeard’s wife" by LE SSERAFIM
// Generated: 10/7/2025, 9:01:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b82536",
  "secondary": "#f2debf",
  "accent": "#26130b",
  "muted": "#a0847c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b82536');
    root.style.setProperty('--color-secondary', '#f2debf');
    root.style.setProperty('--color-accent', '#26130b');
    root.style.setProperty('--color-muted', '#a0847c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}