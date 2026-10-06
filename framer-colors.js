// Auto-generated Framer color updater
// Song: "REBEL HEART" by IVE
// Generated: 10/6/2026, 3:29:41 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#ece4e2",
  "secondary": "#bf5b77",
  "accent": "#a48a8e",
  "muted": "#a48484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#ece4e2');
    root.style.setProperty('--color-secondary', '#bf5b77');
    root.style.setProperty('--color-accent', '#a48a8e');
    root.style.setProperty('--color-muted', '#a48484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}