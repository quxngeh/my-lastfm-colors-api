// Auto-generated Framer color updater
// Song: "Free Somebody" by Luna
// Generated: 4/30/2026, 9:37:41 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#bf4a35",
  "secondary": "#f6d13d",
  "accent": "#5b2115",
  "muted": "#fca48c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#bf4a35');
    root.style.setProperty('--color-secondary', '#f6d13d');
    root.style.setProperty('--color-accent', '#5b2115');
    root.style.setProperty('--color-muted', '#fca48c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}