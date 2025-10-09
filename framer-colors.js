// Auto-generated Framer color updater
// Song: "White Tee" by Summer Walker & NO1-NOAH
// Generated: 10/9/2025, 9:01:20 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#2e3031",
  "secondary": "#c4c1b4",
  "accent": "#939391",
  "muted": "#848484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#2e3031');
    root.style.setProperty('--color-secondary', '#c4c1b4');
    root.style.setProperty('--color-accent', '#939391');
    root.style.setProperty('--color-muted', '#848484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}