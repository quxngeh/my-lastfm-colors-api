// Auto-generated Framer color updater
// Song: "Hurt" by NewJeans
// Generated: 1/26/2026, 9:05:26 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d1d7e4",
  "secondary": "#21318b",
  "accent": "#747dad",
  "muted": "#53609d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d1d7e4');
    root.style.setProperty('--color-secondary', '#21318b');
    root.style.setProperty('--color-accent', '#747dad');
    root.style.setProperty('--color-muted', '#53609d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}