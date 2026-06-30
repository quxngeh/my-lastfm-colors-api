// Auto-generated Framer color updater
// Song: "K-909 : twit" by TRI.BE
// Generated: 6/30/2026, 10:10:20 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#161029",
  "secondary": "#bcabe0",
  "accent": "#615eb2",
  "muted": "#7a9acf"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#161029');
    root.style.setProperty('--color-secondary', '#bcabe0');
    root.style.setProperty('--color-accent', '#615eb2');
    root.style.setProperty('--color-muted', '#7a9acf');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}