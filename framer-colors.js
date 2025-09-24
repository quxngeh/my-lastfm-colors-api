// Auto-generated Framer color updater
// Song: "No Ordinary Love" by Sade
// Generated: 9/24/2025, 9:01:21 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#232017",
  "secondary": "#dcdad5",
  "accent": "#8c8c80",
  "muted": "#847c84"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#232017');
    root.style.setProperty('--color-secondary', '#dcdad5');
    root.style.setProperty('--color-accent', '#8c8c80');
    root.style.setProperty('--color-muted', '#847c84');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}