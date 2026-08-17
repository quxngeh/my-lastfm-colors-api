// Auto-generated Framer color updater
// Song: "Cameo Love" by tripleS
// Generated: 8/17/2026, 9:26:33 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f1f1f1",
  "secondary": "#a8a8a8",
  "accent": "#bcbcbc",
  "muted": "#c4c4c4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f1f1f1');
    root.style.setProperty('--color-secondary', '#a8a8a8');
    root.style.setProperty('--color-accent', '#bcbcbc');
    root.style.setProperty('--color-muted', '#c4c4c4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}