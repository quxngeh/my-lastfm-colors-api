// Auto-generated Framer color updater
// Song: "Midas Touch" by Kiss of Life
// Generated: 5/18/2026, 10:23:43 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#bc666e",
  "secondary": "#fad6d8",
  "accent": "#f5b6bf",
  "muted": "#6a2b2f"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#bc666e');
    root.style.setProperty('--color-secondary', '#fad6d8');
    root.style.setProperty('--color-accent', '#f5b6bf');
    root.style.setProperty('--color-muted', '#6a2b2f');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}