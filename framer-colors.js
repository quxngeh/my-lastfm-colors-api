// Auto-generated Framer color updater
// Song: "Water" by Tyla
// Generated: 5/20/2026, 10:04:37 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3f533d",
  "secondary": "#bd8874",
  "accent": "#96aea1",
  "muted": "#88a494"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3f533d');
    root.style.setProperty('--color-secondary', '#bd8874');
    root.style.setProperty('--color-accent', '#96aea1');
    root.style.setProperty('--color-muted', '#88a494');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}