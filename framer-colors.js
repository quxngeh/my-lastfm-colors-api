// Auto-generated Framer color updater
// Song: "GIỮ LẤY LÀM GÌ" by Monstar
// Generated: 9/13/2025, 9:01:07 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#1e2020",
  "secondary": "#5c5b55",
  "accent": "#4c4c4c",
  "muted": "#4c544c"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#1e2020');
    root.style.setProperty('--color-secondary', '#5c5b55');
    root.style.setProperty('--color-accent', '#4c4c4c');
    root.style.setProperty('--color-muted', '#4c544c');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}