// Auto-generated Framer color updater
// Song: "Kill It" by aespa
// Generated: 9/2/2025, 9:01:06 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0f0e0f",
  "secondary": "#b2b1b0",
  "accent": "#7a7c84",
  "muted": "#6c8c4c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0f0e0f');
    root.style.setProperty('--color-secondary', '#b2b1b0');
    root.style.setProperty('--color-accent', '#7a7c84');
    root.style.setProperty('--color-muted', '#6c8c4c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}