// Auto-generated Framer color updater
// Song: "hiatus" by Elle Darlington
// Generated: 5/2/2026, 9:21:30 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3e3237",
  "secondary": "#f2be96",
  "accent": "#af9a88",
  "muted": "#9c8c8c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3e3237');
    root.style.setProperty('--color-secondary', '#f2be96');
    root.style.setProperty('--color-accent', '#af9a88');
    root.style.setProperty('--color-muted', '#9c8c8c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}