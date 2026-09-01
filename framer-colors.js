// Auto-generated Framer color updater
// Song: "Chỉ Một Câu" by Thịnh Suy
// Generated: 9/1/2026, 1:43:52 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#525444",
  "secondary": "#c3cbae",
  "accent": "#a9a58c",
  "muted": "#96a1a2"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#525444');
    root.style.setProperty('--color-secondary', '#c3cbae');
    root.style.setProperty('--color-accent', '#a9a58c');
    root.style.setProperty('--color-muted', '#96a1a2');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}