// Auto-generated Framer color updater
// Song: "CAKE" by ITZY
// Generated: 8/13/2025, 9:02:27 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d0bacb",
  "secondary": "#1b1527",
  "accent": "#d13648",
  "muted": "#96525e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d0bacb');
    root.style.setProperty('--color-secondary', '#1b1527');
    root.style.setProperty('--color-accent', '#d13648');
    root.style.setProperty('--color-muted', '#96525e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}