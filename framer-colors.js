// Auto-generated Framer color updater
// Song: "Nocturne" by ITZY
// Generated: 9/15/2026, 1:54:38 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#383735",
  "secondary": "#bfbcba",
  "accent": "#9c9c97",
  "muted": "#989494"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#383735');
    root.style.setProperty('--color-secondary', '#bfbcba');
    root.style.setProperty('--color-accent', '#9c9c97');
    root.style.setProperty('--color-muted', '#989494');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}