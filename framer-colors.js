// Auto-generated Framer color updater
// Song: "Quakin'" by DJ Seinfeld
// Generated: 8/4/2026, 11:12:15 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#1e5539",
  "secondary": "#cae1d5",
  "accent": "#65b98e",
  "muted": "#8cac9c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#1e5539');
    root.style.setProperty('--color-secondary', '#cae1d5');
    root.style.setProperty('--color-accent', '#65b98e');
    root.style.setProperty('--color-muted', '#8cac9c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}