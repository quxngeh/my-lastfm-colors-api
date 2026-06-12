// Auto-generated Framer color updater
// Song: "GRIEF IS THE PRICE YOU PAY FOR LOVE" by Phùng Khánh Linh
// Generated: 6/12/2026, 10:27:02 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#222d35",
  "secondary": "#b4c0d0",
  "accent": "#7c8ba3",
  "muted": "#968887"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#222d35');
    root.style.setProperty('--color-secondary', '#b4c0d0');
    root.style.setProperty('--color-accent', '#7c8ba3');
    root.style.setProperty('--color-muted', '#968887');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}