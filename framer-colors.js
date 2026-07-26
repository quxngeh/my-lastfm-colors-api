// Auto-generated Framer color updater
// Song: "Music" by underscores
// Generated: 7/26/2026, 10:24:50 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cccec7",
  "secondary": "#33464c",
  "accent": "#785452",
  "muted": "#97874b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cccec7');
    root.style.setProperty('--color-secondary', '#33464c');
    root.style.setProperty('--color-accent', '#785452');
    root.style.setProperty('--color-muted', '#97874b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}