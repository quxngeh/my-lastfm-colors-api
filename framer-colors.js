// Auto-generated Framer color updater
// Song: "POP" by bugAboo
// Generated: 1/7/2026, 9:04:21 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cebdc5",
  "secondary": "#304d55",
  "accent": "#a3474c",
  "muted": "#ddc129"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cebdc5');
    root.style.setProperty('--color-secondary', '#304d55');
    root.style.setProperty('--color-accent', '#a3474c');
    root.style.setProperty('--color-muted', '#ddc129');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}