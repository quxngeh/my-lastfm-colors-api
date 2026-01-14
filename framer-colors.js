// Auto-generated Framer color updater
// Song: "How Deep Is Your Love" by Calvin Harris, Disciples
// Generated: 1/14/2026, 9:04:16 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0d0c0c",
  "secondary": "#ba9ea4",
  "accent": "#7e8184",
  "muted": "#848c8c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0d0c0c');
    root.style.setProperty('--color-secondary', '#ba9ea4');
    root.style.setProperty('--color-accent', '#7e8184');
    root.style.setProperty('--color-muted', '#848c8c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}