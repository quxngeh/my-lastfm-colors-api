// Auto-generated Framer color updater
// Song: "Take Me to Nirvana (feat. Vinida Weng)" by TOMORROW X TOGETHER
// Generated: 6/27/2026, 9:39:25 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f81e91",
  "secondary": "#4c2837",
  "accent": "#a52a67",
  "muted": "#8f0e4a"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f81e91');
    root.style.setProperty('--color-secondary', '#4c2837');
    root.style.setProperty('--color-accent', '#a52a67');
    root.style.setProperty('--color-muted', '#8f0e4a');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}