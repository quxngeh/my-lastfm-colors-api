// Auto-generated Framer color updater
// Song: "Why So Lonely" by Wonder Girls
// Generated: 2/21/2026, 9:04:09 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e8bf72",
  "secondary": "#efded9",
  "accent": "#565b4a",
  "muted": "#a75b46"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e8bf72');
    root.style.setProperty('--color-secondary', '#efded9');
    root.style.setProperty('--color-accent', '#565b4a');
    root.style.setProperty('--color-muted', '#a75b46');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}