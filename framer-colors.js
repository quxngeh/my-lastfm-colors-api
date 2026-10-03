// Auto-generated Framer color updater
// Song: "I Choose You" by f5ve
// Generated: 10/3/2026, 1:59:12 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#deddda",
  "secondary": "#3b3b41",
  "accent": "#ba925f",
  "muted": "#84614a"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#deddda');
    root.style.setProperty('--color-secondary', '#3b3b41');
    root.style.setProperty('--color-accent', '#ba925f');
    root.style.setProperty('--color-muted', '#84614a');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}