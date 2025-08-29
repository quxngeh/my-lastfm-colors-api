// Auto-generated Framer color updater
// Song: "Igloo" by Kiss of Life
// Generated: 8/29/2025, 9:01:09 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#05080b",
  "secondary": "#e0cde0",
  "accent": "#2a639a",
  "muted": "#558fcd"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#05080b');
    root.style.setProperty('--color-secondary', '#e0cde0');
    root.style.setProperty('--color-accent', '#2a639a');
    root.style.setProperty('--color-muted', '#558fcd');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}