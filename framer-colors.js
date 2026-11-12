// Auto-generated Framer color updater
// Song: "feather" by underscores
// Generated: 11/12/2026, 5:09:31 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#ee635e",
  "secondary": "#040404",
  "accent": "#7c4c44",
  "muted": "#7c343c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#ee635e');
    root.style.setProperty('--color-secondary', '#040404');
    root.style.setProperty('--color-accent', '#7c4c44');
    root.style.setProperty('--color-muted', '#7c343c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}