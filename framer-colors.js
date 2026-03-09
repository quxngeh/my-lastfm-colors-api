// Auto-generated Framer color updater
// Song: "You Can't Come to My Party" by Chase Icon
// Generated: 3/9/2026, 9:11:35 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3f3738",
  "secondary": "#b5b0b7",
  "accent": "#8f8e98",
  "muted": "#999da7"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3f3738');
    root.style.setProperty('--color-secondary', '#b5b0b7');
    root.style.setProperty('--color-accent', '#8f8e98');
    root.style.setProperty('--color-muted', '#999da7');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}