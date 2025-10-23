// Auto-generated Framer color updater
// Song: "Hype Boy" by NewJeans
// Generated: 10/23/2025, 9:01:35 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c3c7e1",
  "secondary": "#192d8e",
  "accent": "#606db0",
  "muted": "#4552a3"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c3c7e1');
    root.style.setProperty('--color-secondary', '#192d8e');
    root.style.setProperty('--color-accent', '#606db0');
    root.style.setProperty('--color-muted', '#4552a3');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}