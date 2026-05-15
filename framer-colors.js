// Auto-generated Framer color updater
// Song: "Hot Summer" by f(x)
// Generated: 5/15/2026, 9:51:35 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e8382b",
  "secondary": "#d6ded0",
  "accent": "#39251e",
  "muted": "#9e9a9c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e8382b');
    root.style.setProperty('--color-secondary', '#d6ded0');
    root.style.setProperty('--color-accent', '#39251e');
    root.style.setProperty('--color-muted', '#9e9a9c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}