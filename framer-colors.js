// Auto-generated Framer color updater
// Song: "Chasing Lightning" by LE SSERAFIM
// Generated: 9/26/2025, 9:01:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#13142c",
  "secondary": "#bbe2f5",
  "accent": "#75b2d2",
  "muted": "#54759e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#13142c');
    root.style.setProperty('--color-secondary', '#bbe2f5');
    root.style.setProperty('--color-accent', '#75b2d2');
    root.style.setProperty('--color-muted', '#54759e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}