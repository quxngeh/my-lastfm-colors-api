// Auto-generated Framer color updater
// Song: "Holy Moly" by IVE
// Generated: 4/14/2026, 9:27:23 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e14374",
  "secondary": "#422b31",
  "accent": "#efcad9",
  "muted": "#f380c5"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e14374');
    root.style.setProperty('--color-secondary', '#422b31');
    root.style.setProperty('--color-accent', '#efcad9');
    root.style.setProperty('--color-muted', '#f380c5');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}