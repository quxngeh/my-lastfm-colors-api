// Auto-generated Framer color updater
// Song: "Bo Peep Bo Peep" by T-ARA
// Generated: 12/20/2025, 9:01:00 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f2f2f2",
  "secondary": "#252525",
  "accent": "#7c7c7c",
  "muted": "#848484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f2f2f2');
    root.style.setProperty('--color-secondary', '#252525');
    root.style.setProperty('--color-accent', '#7c7c7c');
    root.style.setProperty('--color-muted', '#848484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}