// Auto-generated Framer color updater
// Song: "Super Lady" by i-dle
// Generated: 8/27/2026, 7:17:21 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#333539",
  "secondary": "#d3d6dc",
  "accent": "#aab0b8",
  "muted": "#9297a1"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#333539');
    root.style.setProperty('--color-secondary', '#d3d6dc');
    root.style.setProperty('--color-accent', '#aab0b8');
    root.style.setProperty('--color-muted', '#9297a1');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}