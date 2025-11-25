// Auto-generated Framer color updater
// Song: "24" by tripleS
// Generated: 11/25/2025, 9:02:01 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#18181e",
  "secondary": "#b7a9a6",
  "accent": "#7f7e80",
  "muted": "#707484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#18181e');
    root.style.setProperty('--color-secondary', '#b7a9a6');
    root.style.setProperty('--color-accent', '#7f7e80');
    root.style.setProperty('--color-muted', '#707484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}