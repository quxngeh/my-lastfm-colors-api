// Auto-generated Framer color updater
// Song: "Diamond" by TRI.BE
// Generated: 9/8/2026, 1:06:36 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c6bdbb",
  "secondary": "#2a363c",
  "accent": "#86664d",
  "muted": "#6c4c3e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c6bdbb');
    root.style.setProperty('--color-secondary', '#2a363c');
    root.style.setProperty('--color-accent', '#86664d');
    root.style.setProperty('--color-muted', '#6c4c3e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}