// Auto-generated Framer color updater
// Song: "Dopamine (GISELLE SOLO)" by aespa
// Generated: 8/4/2025, 9:04:25 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#232227",
  "secondary": "#caccd3",
  "accent": "#889dbb",
  "muted": "#6a7ca5"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#232227');
    root.style.setProperty('--color-secondary', '#caccd3');
    root.style.setProperty('--color-accent', '#889dbb');
    root.style.setProperty('--color-muted', '#6a7ca5');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}