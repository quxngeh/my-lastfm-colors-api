// Auto-generated Framer color updater
// Song: "CHANEL" by Tyla
// Generated: 10/20/2026, 1:54:10 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#f1ece6",
  "secondary": "#201d16",
  "accent": "#8e5836",
  "muted": "#ad805b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#f1ece6');
    root.style.setProperty('--color-secondary', '#201d16');
    root.style.setProperty('--color-accent', '#8e5836');
    root.style.setProperty('--color-muted', '#ad805b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}