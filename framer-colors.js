// Auto-generated Framer color updater
// Song: "Pretty Please" by Hearts2Hearts
// Generated: 1/6/2026, 9:03:19 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#4f4846",
  "secondary": "#e4b8c2",
  "accent": "#91baef",
  "muted": "#7986c0"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#4f4846');
    root.style.setProperty('--color-secondary', '#e4b8c2');
    root.style.setProperty('--color-accent', '#91baef');
    root.style.setProperty('--color-muted', '#7986c0');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}