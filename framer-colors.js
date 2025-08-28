// Auto-generated Framer color updater
// Song: "Let Me Love You (feat. Lil Wayne)" by Ariana Grande
// Generated: 8/28/2025, 9:01:03 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#4d4d4d",
  "secondary": "#dcdbdb",
  "accent": "#b0b0b0",
  "muted": "#aca4ac"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#4d4d4d');
    root.style.setProperty('--color-secondary', '#dcdbdb');
    root.style.setProperty('--color-accent', '#b0b0b0');
    root.style.setProperty('--color-muted', '#aca4ac');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}