// Auto-generated Framer color updater
// Song: "You Ain't Right" by Janet Jackson
// Generated: 10/26/2026, 3:31:48 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#cdac9d",
  "secondary": "#2b2120",
  "accent": "#6e4137",
  "muted": "#8c553b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#cdac9d');
    root.style.setProperty('--color-secondary', '#2b2120');
    root.style.setProperty('--color-accent', '#6e4137');
    root.style.setProperty('--color-muted', '#8c553b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}