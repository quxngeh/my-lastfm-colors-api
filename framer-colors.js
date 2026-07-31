// Auto-generated Framer color updater
// Song: "Diablo" by tripleS
// Generated: 7/31/2026, 11:14:04 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#323232",
  "secondary": "#cac9d0",
  "accent": "#9396a2",
  "muted": "#878896"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#323232');
    root.style.setProperty('--color-secondary', '#cac9d0');
    root.style.setProperty('--color-accent', '#9396a2');
    root.style.setProperty('--color-muted', '#878896');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}