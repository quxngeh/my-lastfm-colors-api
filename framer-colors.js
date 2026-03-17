// Auto-generated Framer color updater
// Song: "ACT i: Yết (feat. Benly & Nvu)" by kidsai
// Generated: 3/17/2026, 9:14:20 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#ececec",
  "secondary": "#f4f4f4",
  "accent": "#fcfcfc",
  "muted": "#f0ecf8"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#ececec');
    root.style.setProperty('--color-secondary', '#f4f4f4');
    root.style.setProperty('--color-accent', '#fcfcfc');
    root.style.setProperty('--color-muted', '#f0ecf8');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}