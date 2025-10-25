// Auto-generated Framer color updater
// Song: "i don't know" by j-hope & HUH YUNJIN
// Generated: 10/25/2025, 9:01:12 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#3e3933",
  "secondary": "#bdada5",
  "accent": "#3378b0",
  "muted": "#999c92"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#3e3933');
    root.style.setProperty('--color-secondary', '#bdada5');
    root.style.setProperty('--color-accent', '#3378b0');
    root.style.setProperty('--color-muted', '#999c92');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}