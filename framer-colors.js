// Auto-generated Framer color updater
// Song: "oops!" by ILLIT
// Generated: 10/13/2025, 9:01:15 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#494a49",
  "secondary": "#decdbd",
  "accent": "#a8b1b1",
  "muted": "#93a0ad"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#494a49');
    root.style.setProperty('--color-secondary', '#decdbd');
    root.style.setProperty('--color-accent', '#a8b1b1');
    root.style.setProperty('--color-muted', '#93a0ad');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}