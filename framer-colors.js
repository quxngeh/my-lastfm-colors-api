// Auto-generated Framer color updater
// Song: "247" by STAYC
// Generated: 7/16/2026, 10:46:26 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c293c5",
  "secondary": "#100f10",
  "accent": "#7d94d0",
  "muted": "#7c7e7f"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c293c5');
    root.style.setProperty('--color-secondary', '#100f10');
    root.style.setProperty('--color-accent', '#7d94d0');
    root.style.setProperty('--color-muted', '#7c7e7f');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}