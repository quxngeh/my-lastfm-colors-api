// Auto-generated Framer color updater
// Song: "Leak It" by FLO
// Generated: 10/15/2026, 1:43:41 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#2c272b",
  "secondary": "#d7cccd",
  "accent": "#7173a1",
  "muted": "#8c94b7"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#2c272b');
    root.style.setProperty('--color-secondary', '#d7cccd');
    root.style.setProperty('--color-accent', '#7173a1');
    root.style.setProperty('--color-muted', '#8c94b7');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}