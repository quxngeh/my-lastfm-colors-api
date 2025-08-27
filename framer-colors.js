// Auto-generated Framer color updater
// Song: "Rude Love" by f(x)
// Generated: 8/27/2025, 9:01:00 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e64c20",
  "secondary": "#8788be",
  "accent": "#4d3b7d",
  "muted": "#dc9474"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e64c20');
    root.style.setProperty('--color-secondary', '#8788be');
    root.style.setProperty('--color-accent', '#4d3b7d');
    root.style.setProperty('--color-muted', '#dc9474');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}