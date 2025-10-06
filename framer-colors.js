// Auto-generated Framer color updater
// Song: "TRIGGER" by The Boyz
// Generated: 10/6/2025, 9:01:15 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#0f161e",
  "secondary": "#c6d6e1",
  "accent": "#7597af",
  "muted": "#587996"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#0f161e');
    root.style.setProperty('--color-secondary', '#c6d6e1');
    root.style.setProperty('--color-accent', '#7597af');
    root.style.setProperty('--color-muted', '#587996');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}