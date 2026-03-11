// Auto-generated Framer color updater
// Song: "Miss possessive" by Tate McRae
// Generated: 3/11/2026, 9:10:25 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#6578a8",
  "secondary": "#1a1c23",
  "accent": "#64565f",
  "muted": "#445474"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#6578a8');
    root.style.setProperty('--color-secondary', '#1a1c23');
    root.style.setProperty('--color-accent', '#64565f');
    root.style.setProperty('--color-muted', '#445474');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}