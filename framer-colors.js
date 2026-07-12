// Auto-generated Framer color updater
// Song: "Lost In Love" by Girls' Generation
// Generated: 7/12/2026, 10:16:04 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c1474e",
  "secondary": "#292f53",
  "accent": "#e2e0d0",
  "muted": "#ab82d7"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c1474e');
    root.style.setProperty('--color-secondary', '#292f53');
    root.style.setProperty('--color-accent', '#e2e0d0');
    root.style.setProperty('--color-muted', '#ab82d7');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}