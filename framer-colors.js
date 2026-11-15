// Auto-generated Framer color updater
// Song: "3!4!" by AtHeart
// Generated: 11/15/2026, 3:55:16 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#137fb3",
  "secondary": "#d8e5e2",
  "accent": "#7d6250",
  "muted": "#ac866b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#137fb3');
    root.style.setProperty('--color-secondary', '#d8e5e2');
    root.style.setProperty('--color-accent', '#7d6250');
    root.style.setProperty('--color-muted', '#ac866b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}