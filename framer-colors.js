// Auto-generated Framer color updater
// Song: "Howling" by XG
// Generated: 9/4/2025, 9:01:12 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#080808",
  "secondary": "#a1a1a1",
  "accent": "#747474",
  "muted": "#6c6c6c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#080808');
    root.style.setProperty('--color-secondary', '#a1a1a1');
    root.style.setProperty('--color-accent', '#747474');
    root.style.setProperty('--color-muted', '#6c6c6c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}