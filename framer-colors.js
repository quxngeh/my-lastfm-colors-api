// Auto-generated Framer color updater
// Song: "O.O" by NMIXX
// Generated: 3/7/2026, 9:03:39 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#392a25",
  "secondary": "#b07b49",
  "accent": "#837c98",
  "muted": "#909494"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#392a25');
    root.style.setProperty('--color-secondary', '#b07b49');
    root.style.setProperty('--color-accent', '#837c98');
    root.style.setProperty('--color-muted', '#909494');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}