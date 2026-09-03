// Auto-generated Framer color updater
// Song: "Red light sign, but we go" by NMIXX
// Generated: 9/3/2026, 1:02:44 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#423c44",
  "secondary": "#c6d2dd",
  "accent": "#90b2d3",
  "muted": "#8397b4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#423c44');
    root.style.setProperty('--color-secondary', '#c6d2dd');
    root.style.setProperty('--color-accent', '#90b2d3');
    root.style.setProperty('--color-muted', '#8397b4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}