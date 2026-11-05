// Auto-generated Framer color updater
// Song: "Favourite Daughter" by Lorde
// Generated: 11/5/2026, 4:53:41 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#2f92c1",
  "secondary": "#c8e2f1",
  "accent": "#074769",
  "muted": "#86cff1"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#2f92c1');
    root.style.setProperty('--color-secondary', '#c8e2f1');
    root.style.setProperty('--color-accent', '#074769');
    root.style.setProperty('--color-muted', '#86cff1');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}