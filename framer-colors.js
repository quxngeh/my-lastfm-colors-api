// Auto-generated Framer color updater
// Song: "Lucky Girl Syndrome" by ILLIT
// Generated: 11/3/2025, 9:01:15 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#515951",
  "secondary": "#d1cec4",
  "accent": "#a0b1b0",
  "muted": "#9db4a4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#515951');
    root.style.setProperty('--color-secondary', '#d1cec4');
    root.style.setProperty('--color-accent', '#a0b1b0');
    root.style.setProperty('--color-muted', '#9db4a4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}