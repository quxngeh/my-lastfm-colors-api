// Auto-generated Framer color updater
// Song: "CRAZY" by LE SSERAFIM
// Generated: 12/9/2025, 9:02:22 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#12132b",
  "secondary": "#bce2f4",
  "accent": "#74b4d0",
  "muted": "#4f7399"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#12132b');
    root.style.setProperty('--color-secondary', '#bce2f4');
    root.style.setProperty('--color-accent', '#74b4d0');
    root.style.setProperty('--color-muted', '#4f7399');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}