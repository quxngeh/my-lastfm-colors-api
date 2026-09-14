// Auto-generated Framer color updater
// Song: "BLACK DRESS" by CLC
// Generated: 9/14/2026, 3:17:52 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e6e6e6",
  "secondary": "#292929",
  "accent": "#9f9f9f",
  "muted": "#8c8c8c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e6e6e6');
    root.style.setProperty('--color-secondary', '#292929');
    root.style.setProperty('--color-accent', '#9f9f9f');
    root.style.setProperty('--color-muted', '#8c8c8c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}