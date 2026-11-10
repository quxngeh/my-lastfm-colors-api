// Auto-generated Framer color updater
// Song: "Golddigger" by Mckayla Twiggs
// Generated: 11/10/2026, 4:37:59 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#60463a",
  "secondary": "#d4c0b5",
  "accent": "#b0ada5",
  "muted": "#989897"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#60463a');
    root.style.setProperty('--color-secondary', '#d4c0b5');
    root.style.setProperty('--color-accent', '#b0ada5');
    root.style.setProperty('--color-muted', '#989897');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}