// Auto-generated Framer color updater
// Song: "BATTER UP (7 ver.)" by BABYMONSTER
// Generated: 11/6/2025, 9:01:11 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#edcfd3",
  "secondary": "#b8222a",
  "accent": "#c05056",
  "muted": "#cd6f77"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#edcfd3');
    root.style.setProperty('--color-secondary', '#b8222a');
    root.style.setProperty('--color-accent', '#c05056');
    root.style.setProperty('--color-muted', '#cd6f77');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}