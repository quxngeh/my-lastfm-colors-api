// Auto-generated Framer color updater
// Song: "Verified Beauty" by ARTMS
// Generated: 5/9/2026, 9:27:12 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#8fb9a6",
  "secondary": "#0c3e31",
  "accent": "#217560",
  "muted": "#445c60"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#8fb9a6');
    root.style.setProperty('--color-secondary', '#0c3e31');
    root.style.setProperty('--color-accent', '#217560');
    root.style.setProperty('--color-muted', '#445c60');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}