// Auto-generated Framer color updater
// Song: "Killin’ Me Good" by Jihyo
// Generated: 8/7/2025, 9:03:38 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#a29e93",
  "secondary": "#2e3d36",
  "accent": "#654136",
  "muted": "#5d4b45"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#a29e93');
    root.style.setProperty('--color-secondary', '#2e3d36');
    root.style.setProperty('--color-accent', '#654136');
    root.style.setProperty('--color-muted', '#5d4b45');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}