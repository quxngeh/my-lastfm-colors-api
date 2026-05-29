// Auto-generated Framer color updater
// Song: "Mr.Mr." by Girls' Generation
// Generated: 5/29/2026, 10:16:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c1886b",
  "secondary": "#16233a",
  "accent": "#95224a",
  "muted": "#d7d2dd"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c1886b');
    root.style.setProperty('--color-secondary', '#16233a');
    root.style.setProperty('--color-accent', '#95224a');
    root.style.setProperty('--color-muted', '#d7d2dd');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}