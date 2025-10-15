// Auto-generated Framer color updater
// Song: "Guess featuring billie eilish" by Charli xcx
// Generated: 10/15/2025, 9:01:09 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#8ac908",
  "secondary": "#162a05",
  "accent": "#557810",
  "muted": "#3c6906"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#8ac908');
    root.style.setProperty('--color-secondary', '#162a05');
    root.style.setProperty('--color-accent', '#557810');
    root.style.setProperty('--color-muted', '#3c6906');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}