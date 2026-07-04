// Auto-generated Framer color updater
// Song: "Accendio" by IVE
// Generated: 7/4/2026, 10:45:27 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d7d3e7",
  "secondary": "#16b5e1",
  "accent": "#d7f62c",
  "muted": "#75bcd9"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d7d3e7');
    root.style.setProperty('--color-secondary', '#16b5e1');
    root.style.setProperty('--color-accent', '#d7f62c');
    root.style.setProperty('--color-muted', '#75bcd9');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}