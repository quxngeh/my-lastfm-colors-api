// Auto-generated Framer color updater
// Song: "WORK" by Billlie
// Generated: 6/4/2026, 10:15:06 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#1a1918",
  "secondary": "#c0b9a5",
  "accent": "#828578",
  "muted": "#7c7c84"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#1a1918');
    root.style.setProperty('--color-secondary', '#c0b9a5');
    root.style.setProperty('--color-accent', '#828578');
    root.style.setProperty('--color-muted', '#7c7c84');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}