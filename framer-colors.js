// Auto-generated Framer color updater
// Song: "ExtraL" by JENNIE & Doechii
// Generated: 9/6/2025, 9:01:06 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#090e0d",
  "secondary": "#c04338",
  "accent": "#786c60",
  "muted": "#715e5c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#090e0d');
    root.style.setProperty('--color-secondary', '#c04338');
    root.style.setProperty('--color-accent', '#786c60');
    root.style.setProperty('--color-muted', '#715e5c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}