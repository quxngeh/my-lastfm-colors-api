// Auto-generated Framer color updater
// Song: "Apple" by GFRIEND
// Generated: 10/30/2025, 9:01:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#1d1b18",
  "secondary": "#c5bbb1",
  "accent": "#818581",
  "muted": "#040ca4"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#1d1b18');
    root.style.setProperty('--color-secondary', '#c5bbb1');
    root.style.setProperty('--color-accent', '#818581');
    root.style.setProperty('--color-muted', '#040ca4');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}