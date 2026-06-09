// Auto-generated Framer color updater
// Song: "Pull Up" by Summer Walker
// Generated: 6/9/2026, 10:10:57 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#49585a",
  "secondary": "#d1cacb",
  "accent": "#84a4bb",
  "muted": "#a0b9c2"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#49585a');
    root.style.setProperty('--color-secondary', '#d1cacb');
    root.style.setProperty('--color-accent', '#84a4bb');
    root.style.setProperty('--color-muted', '#a0b9c2');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}