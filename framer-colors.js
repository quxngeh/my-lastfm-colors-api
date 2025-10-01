// Auto-generated Framer color updater
// Song: "Last Sequence" by WJSN
// Generated: 10/1/2025, 9:01:26 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#92d4e2",
  "secondary": "#26a5b5",
  "accent": "#93853b",
  "muted": "#755f9b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#92d4e2');
    root.style.setProperty('--color-secondary', '#26a5b5');
    root.style.setProperty('--color-accent', '#93853b');
    root.style.setProperty('--color-muted', '#755f9b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}