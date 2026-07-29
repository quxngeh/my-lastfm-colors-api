// Auto-generated Framer color updater
// Song: "Never Enough" by Rochelle Jordan
// Generated: 7/29/2026, 11:11:13 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#161717",
  "secondary": "#bdbfc3",
  "accent": "#848c91",
  "muted": "#81848c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#161717');
    root.style.setProperty('--color-secondary', '#bdbfc3');
    root.style.setProperty('--color-accent', '#848c91');
    root.style.setProperty('--color-muted', '#81848c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}