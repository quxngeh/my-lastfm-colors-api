// Auto-generated Framer color updater
// Song: "Cầu Vĩnh Tuy" by Wren Evans & itsnk
// Generated: 11/1/2025, 9:01:10 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3f2224",
  "secondary": "#d4b7bb",
  "accent": "#9095a3",
  "muted": "#797c92"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3f2224');
    root.style.setProperty('--color-secondary', '#d4b7bb');
    root.style.setProperty('--color-accent', '#9095a3');
    root.style.setProperty('--color-muted', '#797c92');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}