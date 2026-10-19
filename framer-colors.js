// Auto-generated Framer color updater
// Song: "Stars Are Fake" by Marci
// Generated: 10/19/2026, 3:54:56 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3d3a3a",
  "secondary": "#9b876e",
  "accent": "#838a96",
  "muted": "#8a8c6e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3d3a3a');
    root.style.setProperty('--color-secondary', '#9b876e');
    root.style.setProperty('--color-accent', '#838a96');
    root.style.setProperty('--color-muted', '#8a8c6e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}