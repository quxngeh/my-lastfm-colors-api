// Auto-generated Framer color updater
// Song: "Leak It" by FLO
// Generated: 9/5/2026, 12:09:51 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#292225",
  "secondary": "#d9c9c9",
  "accent": "#6b6f9e",
  "muted": "#8a94af"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#292225');
    root.style.setProperty('--color-secondary', '#d9c9c9');
    root.style.setProperty('--color-accent', '#6b6f9e');
    root.style.setProperty('--color-muted', '#8a94af');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}