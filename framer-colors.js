// Auto-generated Framer color updater
// Song: "Sài Gòn Khóc Hộ Em" by Vũ Thanh Vân
// Generated: 9/18/2026, 1:11:55 PM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#778862",
  "secondary": "#191b21",
  "accent": "#cbbeb1",
  "muted": "#aeb7b1"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#778862');
    root.style.setProperty('--color-secondary', '#191b21');
    root.style.setProperty('--color-accent', '#cbbeb1');
    root.style.setProperty('--color-muted', '#aeb7b1');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}