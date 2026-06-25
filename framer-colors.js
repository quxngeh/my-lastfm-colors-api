// Auto-generated Framer color updater
// Song: "Sarang" by Chawool
// Generated: 6/25/2026, 10:00:42 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c0a696",
  "secondary": "#395441",
  "accent": "#9f6638",
  "muted": "#92514e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c0a696');
    root.style.setProperty('--color-secondary', '#395441');
    root.style.setProperty('--color-accent', '#9f6638');
    root.style.setProperty('--color-muted', '#92514e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}