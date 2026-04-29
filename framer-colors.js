// Auto-generated Framer color updater
// Song: "Step" by f(x)
// Generated: 4/29/2026, 9:37:39 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e896b5",
  "secondary": "#40262c",
  "accent": "#962d55",
  "muted": "#82464a"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e896b5');
    root.style.setProperty('--color-secondary', '#40262c');
    root.style.setProperty('--color-accent', '#962d55');
    root.style.setProperty('--color-muted', '#82464a');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}