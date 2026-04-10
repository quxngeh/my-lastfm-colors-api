// Auto-generated Framer color updater
// Song: "LIKE THAT" by BABYMONSTER
// Generated: 4/10/2026, 9:23:12 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#eed1d1",
  "secondary": "#bb252b",
  "accent": "#d07679",
  "muted": "#ca5a5d"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#eed1d1');
    root.style.setProperty('--color-secondary', '#bb252b');
    root.style.setProperty('--color-accent', '#d07679');
    root.style.setProperty('--color-muted', '#ca5a5d');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}