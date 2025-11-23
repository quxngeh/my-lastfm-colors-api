// Auto-generated Framer color updater
// Song: "Magic Clock" by f5ve
// Generated: 11/23/2025, 9:00:59 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e1dad7",
  "secondary": "#2a2931",
  "accent": "#8c5d55",
  "muted": "#b8845e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e1dad7');
    root.style.setProperty('--color-secondary', '#2a2931');
    root.style.setProperty('--color-accent', '#8c5d55');
    root.style.setProperty('--color-muted', '#b8845e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}