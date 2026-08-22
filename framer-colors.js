// Auto-generated Framer color updater
// Song: "Pressure" by 최리
// Generated: 8/22/2026, 9:14:40 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d2c7c9",
  "secondary": "#22262f",
  "accent": "#7e4b5a",
  "muted": "#7c6759"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d2c7c9');
    root.style.setProperty('--color-secondary', '#22262f');
    root.style.setProperty('--color-accent', '#7e4b5a');
    root.style.setProperty('--color-muted', '#7c6759');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}