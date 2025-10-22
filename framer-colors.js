// Auto-generated Framer color updater
// Song: "NGÂN" by tlinh & Low G
// Generated: 10/22/2025, 9:01:29 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#c15f51",
  "secondary": "#120d0b",
  "accent": "#848484",
  "muted": "#7c7c7c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#c15f51');
    root.style.setProperty('--color-secondary', '#120d0b');
    root.style.setProperty('--color-accent', '#848484');
    root.style.setProperty('--color-muted', '#7c7c7c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}