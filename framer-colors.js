// Auto-generated Framer color updater
// Song: "My 808" by Kiss of Life
// Generated: 8/29/2026, 2:02:20 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#252525",
  "secondary": "#f2f2f2",
  "accent": "#a7a7a7",
  "muted": "#8c8c8c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#252525');
    root.style.setProperty('--color-secondary', '#f2f2f2');
    root.style.setProperty('--color-accent', '#a7a7a7');
    root.style.setProperty('--color-muted', '#8c8c8c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}