// Auto-generated Framer color updater
// Song: "Pop Off Pop Off" by KiiiKiii
// Generated: 11/23/2026, 8:38:25 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#959e9a",
  "secondary": "#2e3a39",
  "accent": "#6b333b",
  "muted": "#79762b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#959e9a');
    root.style.setProperty('--color-secondary', '#2e3a39');
    root.style.setProperty('--color-accent', '#6b333b');
    root.style.setProperty('--color-muted', '#79762b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}