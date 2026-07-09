// Auto-generated Framer color updater
// Song: "RUDE!" by Hearts2Hearts
// Generated: 7/9/2026, 11:41:21 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#afd3e3",
  "secondary": "#707e55",
  "accent": "#45403a",
  "muted": "#48bdfa"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#afd3e3');
    root.style.setProperty('--color-secondary', '#707e55');
    root.style.setProperty('--color-accent', '#45403a');
    root.style.setProperty('--color-muted', '#48bdfa');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}