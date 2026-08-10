// Auto-generated Framer color updater
// Song: "Why is She Still Here?" by Reneé Rapp
// Generated: 8/10/2026, 10:05:21 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cea897",
  "secondary": "#6f4028",
  "accent": "#784944",
  "muted": "#6b5447"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cea897');
    root.style.setProperty('--color-secondary', '#6f4028');
    root.style.setProperty('--color-accent', '#784944');
    root.style.setProperty('--color-muted', '#6b5447');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}