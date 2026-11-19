// Auto-generated Framer color updater
// Song: "Hey Hi" by KiiiKiii
// Generated: 11/19/2026, 5:45:51 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#959e9a",
  "secondary": "#2e3b39",
  "accent": "#6b333b",
  "muted": "#78772a"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#959e9a');
    root.style.setProperty('--color-secondary', '#2e3b39');
    root.style.setProperty('--color-accent', '#6b333b');
    root.style.setProperty('--color-muted', '#78772a');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}