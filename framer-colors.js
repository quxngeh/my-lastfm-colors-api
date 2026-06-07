// Auto-generated Framer color updater
// Song: "TILT" by Red Velvet - IRENE & SEULGI
// Generated: 6/7/2026, 9:58:41 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#08090a",
  "secondary": "#cec4c2",
  "accent": "#9f4f4e",
  "muted": "#6e7988"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#08090a');
    root.style.setProperty('--color-secondary', '#cec4c2');
    root.style.setProperty('--color-accent', '#9f4f4e');
    root.style.setProperty('--color-muted', '#6e7988');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}