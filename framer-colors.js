// Auto-generated Framer color updater
// Song: "DIRTY!" by JPEGMAFIA
// Generated: 7/28/2026, 11:06:13 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#131718",
  "secondary": "#b3b7be",
  "accent": "#7b92a2",
  "muted": "#6a7f91"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#131718');
    root.style.setProperty('--color-secondary', '#b3b7be');
    root.style.setProperty('--color-accent', '#7b92a2');
    root.style.setProperty('--color-muted', '#6a7f91');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}