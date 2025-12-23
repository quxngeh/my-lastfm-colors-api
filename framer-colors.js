// Auto-generated Framer color updater
// Song: "TTYL" by Loossemble
// Generated: 12/23/2025, 9:02:57 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e8eadd",
  "secondary": "#bdcb75",
  "accent": "#aeb49b",
  "muted": "#bcbca7"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e8eadd');
    root.style.setProperty('--color-secondary', '#bdcb75');
    root.style.setProperty('--color-accent', '#aeb49b');
    root.style.setProperty('--color-muted', '#bcbca7');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}