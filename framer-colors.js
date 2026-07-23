// Auto-generated Framer color updater
// Song: "ngưu tầm ngưu mã tầm mã" by Phùng Khánh Linh
// Generated: 7/23/2026, 10:54:52 AM

// For use in Framer code components or override functions
export const colors = {
  "primary": "#283d3e",
  "secondary": "#8fc0bb",
  "accent": "#689a9d",
  "muted": "#96756e"
};

// Function to apply colors programmatically
export function applyColors() {
    const root = document.documentElement;
        root.style.setProperty('--color-primary', '#283d3e');
    root.style.setProperty('--color-secondary', '#8fc0bb');
    root.style.setProperty('--color-accent', '#689a9d');
    root.style.setProperty('--color-muted', '#96756e');
}

// Auto-apply colors when this script loads
if (typeof window !== 'undefined') {
    applyColors();
}