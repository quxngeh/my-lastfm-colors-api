// Auto-generated Framer color updater
// Song: "Hashtag" by Yves
// Generated: 9/27/2026, 2:21:11 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#492139",
  "secondary": "#b56b7e",
  "accent": "#936d93",
  "muted": "#8c6c84"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#492139');
    root.style.setProperty('--color-secondary', '#b56b7e');
    root.style.setProperty('--color-accent', '#936d93');
    root.style.setProperty('--color-muted', '#8c6c84');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}