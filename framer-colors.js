// Auto-generated Framer color updater
// Song: "MANIAC" by VIVIZ
// Generated: 8/18/2026, 9:18:45 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#061217",
  "secondary": "#1ec3dc",
  "accent": "#085363",
  "muted": "#218d8c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#061217');
    root.style.setProperty('--color-secondary', '#1ec3dc');
    root.style.setProperty('--color-accent', '#085363');
    root.style.setProperty('--color-muted', '#218d8c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}