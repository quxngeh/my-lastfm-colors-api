// Auto-generated Framer color updater
// Song: "The Star Song" by Voh
// Generated: 11/13/2026, 4:48:15 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#5f5351",
  "secondary": "#d8b2a9",
  "accent": "#adafaa",
  "muted": "#9fa3ad"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#5f5351');
    root.style.setProperty('--color-secondary', '#d8b2a9');
    root.style.setProperty('--color-accent', '#adafaa');
    root.style.setProperty('--color-muted', '#9fa3ad');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}