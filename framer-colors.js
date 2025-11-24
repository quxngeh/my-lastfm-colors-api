// Auto-generated Framer color updater
// Song: "ATTITUDE" by IVE
// Generated: 11/24/2025, 9:01:46 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#eae3e1",
  "secondary": "#ca5577",
  "accent": "#ac7c84",
  "muted": "#a48890"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#eae3e1');
    root.style.setProperty('--color-secondary', '#ca5577');
    root.style.setProperty('--color-accent', '#ac7c84');
    root.style.setProperty('--color-muted', '#a48890');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}