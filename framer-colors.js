// Auto-generated Framer color updater
// Song: "LOVE ATTACK" by RESCENE
// Generated: 11/13/2025, 9:01:14 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#34a7c5",
  "secondary": "#d4b2c5",
  "accent": "#193c48",
  "muted": "#2e5474"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#34a7c5');
    root.style.setProperty('--color-secondary', '#d4b2c5');
    root.style.setProperty('--color-accent', '#193c48');
    root.style.setProperty('--color-muted', '#2e5474');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}