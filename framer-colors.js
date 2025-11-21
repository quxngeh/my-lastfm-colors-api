// Auto-generated Framer color updater
// Song: "bow wow" by The Deep
// Generated: 11/21/2025, 9:01:06 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c0a1a0",
  "secondary": "#351f22",
  "accent": "#69322f",
  "muted": "#764f49"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c0a1a0');
    root.style.setProperty('--color-secondary', '#351f22');
    root.style.setProperty('--color-accent', '#69322f');
    root.style.setProperty('--color-muted', '#764f49');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}