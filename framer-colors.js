// Auto-generated Framer color updater
// Song: "Sea of Memories" by The Blokes
// Generated: 2/16/2026, 9:13:30 AM

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