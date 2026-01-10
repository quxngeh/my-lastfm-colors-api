// Auto-generated Framer color updater
// Song: "Picky Picky" by Weki Meki
// Generated: 1/10/2026, 9:00:59 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f7dd5e",
  "secondary": "#f894e0",
  "accent": "#e65fab",
  "muted": "#f7caa4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f7dd5e');
    root.style.setProperty('--color-secondary', '#f894e0');
    root.style.setProperty('--color-accent', '#e65fab');
    root.style.setProperty('--color-muted', '#f7caa4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}