// Auto-generated Framer color updater
// Song: "Fin." by RAYE
// Generated: 7/27/2026, 12:07:02 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#54504b",
  "secondary": "#a3bdf8",
  "accent": "#ad9692",
  "muted": "#7996dd"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#54504b');
    root.style.setProperty('--color-secondary', '#a3bdf8');
    root.style.setProperty('--color-accent', '#ad9692');
    root.style.setProperty('--color-muted', '#7996dd');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}