// Auto-generated Framer color updater
// Song: "Serenade (KARINA & WINTER)" by aespa
// Generated: 10/27/2026, 2:57:37 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#aeadb1",
  "secondary": "#343436",
  "accent": "#545454",
  "muted": "#544c5b"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#aeadb1');
    root.style.setProperty('--color-secondary', '#343436');
    root.style.setProperty('--color-accent', '#545454');
    root.style.setProperty('--color-muted', '#544c5b');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}