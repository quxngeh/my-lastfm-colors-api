// Auto-generated Framer color updater
// Song: "Holding a Leech" by Jane Remover
// Generated: 9/9/2026, 1:11:33 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b1a8a0",
  "secondary": "#262b31",
  "accent": "#72563b",
  "muted": "#57402d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b1a8a0');
    root.style.setProperty('--color-secondary', '#262b31');
    root.style.setProperty('--color-accent', '#72563b');
    root.style.setProperty('--color-muted', '#57402d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}