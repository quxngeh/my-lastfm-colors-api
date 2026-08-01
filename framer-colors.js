// Auto-generated Framer color updater
// Song: "YoYo" by RESCENE
// Generated: 8/1/2026, 10:23:35 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#e96eca",
  "secondary": "#f1e6f0",
  "accent": "#e9a5da",
  "muted": "#fa7ae4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#e96eca');
    root.style.setProperty('--color-secondary', '#f1e6f0');
    root.style.setProperty('--color-accent', '#e9a5da');
    root.style.setProperty('--color-muted', '#fa7ae4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}