// Auto-generated Framer color updater
// Song: "Morph" by Twenty One Pilots
// Generated: 8/21/2026, 9:22:22 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#1d1c16",
  "secondary": "#bbad2e",
  "accent": "#848c7d",
  "muted": "#848484"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#1d1c16');
    root.style.setProperty('--color-secondary', '#bbad2e');
    root.style.setProperty('--color-accent', '#848c7d');
    root.style.setProperty('--color-muted', '#848484');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}