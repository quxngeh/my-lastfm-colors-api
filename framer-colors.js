// Auto-generated Framer color updater
// Song: "FOCUS" by Everglow
// Generated: 10/10/2026, 2:50:59 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#18191d",
  "secondary": "#b6aeb1",
  "accent": "#82848c",
  "muted": "#848c8c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#18191d');
    root.style.setProperty('--color-secondary', '#b6aeb1');
    root.style.setProperty('--color-accent', '#82848c');
    root.style.setProperty('--color-muted', '#848c8c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}