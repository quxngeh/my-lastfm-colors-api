// Auto-generated Framer color updater
// Song: "Force (ANYUJIN Solo)" by IVE
// Generated: 3/10/2026, 9:10:41 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#061d54",
  "secondary": "#c0dcf0",
  "accent": "#748bb2",
  "muted": "#6b85af"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#061d54');
    root.style.setProperty('--color-secondary', '#c0dcf0');
    root.style.setProperty('--color-accent', '#748bb2');
    root.style.setProperty('--color-muted', '#6b85af');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}