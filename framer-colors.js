// Auto-generated Framer color updater
// Song: "Holy Moly" by IVE
// Generated: 7/2/2026, 9:58:59 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#ee4075",
  "secondary": "#45262d",
  "accent": "#f5cada",
  "muted": "#fb7fc4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#ee4075');
    root.style.setProperty('--color-secondary', '#45262d');
    root.style.setProperty('--color-accent', '#f5cada');
    root.style.setProperty('--color-muted', '#fb7fc4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}