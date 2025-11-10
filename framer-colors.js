// Auto-generated Framer color updater
// Song: "Rumor" by H.I.N.P (Hot Issue of Ntl. Producers)
// Generated: 11/10/2025, 9:01:08 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f2e6f4",
  "secondary": "#e16ba3",
  "accent": "#ea9dc0",
  "muted": "#ba96ac"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f2e6f4');
    root.style.setProperty('--color-secondary', '#e16ba3');
    root.style.setProperty('--color-accent', '#ea9dc0');
    root.style.setProperty('--color-muted', '#ba96ac');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}