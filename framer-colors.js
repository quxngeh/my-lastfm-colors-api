// Auto-generated Framer color updater
// Song: "Hello XO" by RESCENE
// Generated: 11/18/2026, 5:38:12 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e2d2d6",
  "secondary": "#3f3539",
  "accent": "#b35f7b",
  "muted": "#907063"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e2d2d6');
    root.style.setProperty('--color-secondary', '#3f3539');
    root.style.setProperty('--color-accent', '#b35f7b');
    root.style.setProperty('--color-muted', '#907063');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}