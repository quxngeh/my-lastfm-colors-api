// Auto-generated Framer color updater
// Song: "Pro At Crying" by Chinese Cigarettes
// Generated: 8/26/2026, 9:27:20 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#94acb1",
  "secondary": "#3a4433",
  "accent": "#466c67",
  "muted": "#5a5c62"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#94acb1');
    root.style.setProperty('--color-secondary', '#3a4433');
    root.style.setProperty('--color-accent', '#466c67');
    root.style.setProperty('--color-muted', '#5a5c62');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}