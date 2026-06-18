// Auto-generated Framer color updater
// Song: "Airplane pt.2" by BTS
// Generated: 6/18/2026, 10:28:02 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cfb6d7",
  "secondary": "#f2b3c5",
  "accent": "#f7e9f9",
  "muted": "#a9c4ea"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cfb6d7');
    root.style.setProperty('--color-secondary', '#f2b3c5');
    root.style.setProperty('--color-accent', '#f7e9f9');
    root.style.setProperty('--color-muted', '#a9c4ea');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}