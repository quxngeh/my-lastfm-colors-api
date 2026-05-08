// Auto-generated Framer color updater
// Song: "Do It" by underscores
// Generated: 5/8/2026, 9:28:03 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e9e7e0",
  "secondary": "#151515",
  "accent": "#7f7c79",
  "muted": "#87847c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e9e7e0');
    root.style.setProperty('--color-secondary', '#151515');
    root.style.setProperty('--color-accent', '#7f7c79');
    root.style.setProperty('--color-muted', '#87847c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}