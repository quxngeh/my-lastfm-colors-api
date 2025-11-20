// Auto-generated Framer color updater
// Song: "Dreams Come True" by aespa
// Generated: 11/20/2025, 9:01:12 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#080809",
  "secondary": "#bcacaa",
  "accent": "#3677ad",
  "muted": "#7c847c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#080809');
    root.style.setProperty('--color-secondary', '#bcacaa');
    root.style.setProperty('--color-accent', '#3677ad');
    root.style.setProperty('--color-muted', '#7c847c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}