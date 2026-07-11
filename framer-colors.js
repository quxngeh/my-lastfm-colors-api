// Auto-generated Framer color updater
// Song: "Joshua Tree" by Demi Lovato
// Generated: 7/11/2026, 10:07:07 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#544c4b",
  "secondary": "#c7a799",
  "accent": "#a4b3b4",
  "muted": "#999fac"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#544c4b');
    root.style.setProperty('--color-secondary', '#c7a799');
    root.style.setProperty('--color-accent', '#a4b3b4');
    root.style.setProperty('--color-muted', '#999fac');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}