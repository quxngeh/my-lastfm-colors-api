// Auto-generated Framer color updater
// Song: "Straight Line (Korean version)" by Kep1er
// Generated: 9/14/2025, 9:01:18 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#110d11",
  "secondary": "#bbacbc",
  "accent": "#6b6f8c",
  "muted": "#7788a6"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#110d11');
    root.style.setProperty('--color-secondary', '#bbacbc');
    root.style.setProperty('--color-accent', '#6b6f8c');
    root.style.setProperty('--color-muted', '#7788a6');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}