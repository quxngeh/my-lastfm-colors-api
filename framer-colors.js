// Auto-generated Framer color updater
// Song: "Excusez Moi" by Cobrah
// Generated: 7/15/2026, 10:39:07 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#302620",
  "secondary": "#a28c79",
  "accent": "#7c7464",
  "muted": "#7c6c64"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#302620');
    root.style.setProperty('--color-secondary', '#a28c79');
    root.style.setProperty('--color-accent', '#7c7464');
    root.style.setProperty('--color-muted', '#7c6c64');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}