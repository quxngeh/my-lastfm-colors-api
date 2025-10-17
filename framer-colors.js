// Auto-generated Framer color updater
// Song: "I WANT THAT" by (G)I-DLE
// Generated: 10/17/2025, 9:01:14 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#d38a4c",
  "secondary": "#36231d",
  "accent": "#ddc396",
  "muted": "#8f3a21"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#d38a4c');
    root.style.setProperty('--color-secondary', '#36231d');
    root.style.setProperty('--color-accent', '#ddc396');
    root.style.setProperty('--color-muted', '#8f3a21');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}