// Auto-generated Framer color updater
// Song: "DYNAMITE" by Tyla & Wizkid
// Generated: 4/2/2026, 9:18:02 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e1d7d2",
  "secondary": "#48291a",
  "accent": "#7e4c33",
  "muted": "#a37759"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e1d7d2');
    root.style.setProperty('--color-secondary', '#48291a');
    root.style.setProperty('--color-accent', '#7e4c33');
    root.style.setProperty('--color-muted', '#a37759');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}