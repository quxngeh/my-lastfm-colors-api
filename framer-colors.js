// Auto-generated Framer color updater
// Song: "LOVE DIVE" by IVE
// Generated: 10/31/2026, 2:51:52 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0997e9",
  "secondary": "#d4e5ec",
  "accent": "#21333f",
  "muted": "#425d69"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0997e9');
    root.style.setProperty('--color-secondary', '#d4e5ec');
    root.style.setProperty('--color-accent', '#21333f');
    root.style.setProperty('--color-muted', '#425d69');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}