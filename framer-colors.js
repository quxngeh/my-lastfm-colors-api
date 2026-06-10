// Auto-generated Framer color updater
// Song: "TING TING TING" by ITZY
// Generated: 6/10/2026, 10:22:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#1c2844",
  "secondary": "#cea88c",
  "accent": "#77b8a0",
  "muted": "#5172ca"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#1c2844');
    root.style.setProperty('--color-secondary', '#cea88c');
    root.style.setProperty('--color-accent', '#77b8a0');
    root.style.setProperty('--color-muted', '#5172ca');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}