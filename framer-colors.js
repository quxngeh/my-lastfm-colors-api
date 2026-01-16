// Auto-generated Framer color updater
// Song: "DRIP" by BABYMONSTER
// Generated: 1/16/2026, 9:02:55 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#36047c",
  "secondary": "#f613ab",
  "accent": "#800990",
  "muted": "#5b0486"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#36047c');
    root.style.setProperty('--color-secondary', '#f613ab');
    root.style.setProperty('--color-accent', '#800990');
    root.style.setProperty('--color-muted', '#5b0486');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}