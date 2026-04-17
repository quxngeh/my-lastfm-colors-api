// Auto-generated Framer color updater
// Song: "TAKE MY BREATH" by XG
// Generated: 4/17/2026, 9:27:16 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#efefed",
  "secondary": "#0a0a0a",
  "accent": "#747472",
  "muted": "#7c7c74"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#efefed');
    root.style.setProperty('--color-secondary', '#0a0a0a');
    root.style.setProperty('--color-accent', '#747472');
    root.style.setProperty('--color-muted', '#7c7c74');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}