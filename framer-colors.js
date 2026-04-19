// Auto-generated Framer color updater
// Song: "BEAT BEAT" by NMIXX
// Generated: 4/19/2026, 9:13:24 AM

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