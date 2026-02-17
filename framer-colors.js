// Auto-generated Framer color updater
// Song: "Mr.Mr." by 소녀시대
// Generated: 2/17/2026, 9:13:23 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c4896a",
  "secondary": "#15223a",
  "accent": "#95214a",
  "muted": "#d9d3de"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c4896a');
    root.style.setProperty('--color-secondary', '#15223a');
    root.style.setProperty('--color-accent', '#95214a');
    root.style.setProperty('--color-muted', '#d9d3de');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}