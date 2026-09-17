// Auto-generated Framer color updater
// Song: "Ain't In LA" by ADÉLA
// Generated: 9/17/2026, 1:49:45 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e6d5d5",
  "secondary": "#40141c",
  "accent": "#9f2a42",
  "muted": "#b96f69"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e6d5d5');
    root.style.setProperty('--color-secondary', '#40141c');
    root.style.setProperty('--color-accent', '#9f2a42');
    root.style.setProperty('--color-muted', '#b96f69');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}