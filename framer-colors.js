// Auto-generated Framer color updater
// Song: "Low-key Scared But H1-KEY Ready" by H1-KEY
// Generated: 1/25/2026, 9:01:03 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#b39ca9",
  "secondary": "#292d3c",
  "accent": "#5a3b4a",
  "muted": "#7c5947"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#b39ca9');
    root.style.setProperty('--color-secondary', '#292d3c');
    root.style.setProperty('--color-accent', '#5a3b4a');
    root.style.setProperty('--color-muted', '#7c5947');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}