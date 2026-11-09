// Auto-generated Framer color updater
// Song: "Superscar" by ADÉLA
// Generated: 11/9/2026, 7:15:03 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#424c5e",
  "secondary": "#a8a5c8",
  "accent": "#9e91aa",
  "muted": "#949cac"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#424c5e');
    root.style.setProperty('--color-secondary', '#a8a5c8');
    root.style.setProperty('--color-accent', '#9e91aa');
    root.style.setProperty('--color-muted', '#949cac');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}