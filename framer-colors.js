// Auto-generated Framer color updater
// Song: "Zig Zag" by f(x)
// Generated: 6/1/2026, 10:39:02 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c7c7c6",
  "secondary": "#32332c",
  "accent": "#67695d",
  "muted": "#5e5954"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c7c7c6');
    root.style.setProperty('--color-secondary', '#32332c');
    root.style.setProperty('--color-accent', '#67695d');
    root.style.setProperty('--color-muted', '#5e5954');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}