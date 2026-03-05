// Auto-generated Framer color updater
// Song: "Can We Talk Again" by PURPLE KISS
// Generated: 3/5/2026, 9:10:42 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#ebeaf3",
  "secondary": "#8956d1",
  "accent": "#423c55",
  "muted": "#7d787c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#ebeaf3');
    root.style.setProperty('--color-secondary', '#8956d1');
    root.style.setProperty('--color-accent', '#423c55');
    root.style.setProperty('--color-muted', '#7d787c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}