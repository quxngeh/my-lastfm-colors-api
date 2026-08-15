// Auto-generated Framer color updater
// Song: "HOT" by LE SSERAFIM
// Generated: 8/15/2026, 9:13:04 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d2a27b",
  "secondary": "#413d44",
  "accent": "#873820",
  "muted": "#e9ddc5"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d2a27b');
    root.style.setProperty('--color-secondary', '#413d44');
    root.style.setProperty('--color-accent', '#873820');
    root.style.setProperty('--color-muted', '#e9ddc5');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}