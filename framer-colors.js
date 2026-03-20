// Auto-generated Framer color updater
// Song: "Oh My Gosh" by PURPLE KISS
// Generated: 3/20/2026, 9:09:24 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#501e66",
  "secondary": "#ead7eb",
  "accent": "#b184b4",
  "muted": "#a480b4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#501e66');
    root.style.setProperty('--color-secondary', '#ead7eb');
    root.style.setProperty('--color-accent', '#b184b4');
    root.style.setProperty('--color-muted', '#a480b4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}