/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            colors: {
                blue: "#00dffb",
                cyan: "#4a91a8",
                yellow: "#ff9b22",
                milky: "#eaf0dc",
                navy: "#121721",
                lightNavy: "#2b2b1e",
                lightBg: "#1f1f1f",
                lightText: "var(--text-secondary)",
                lightGreen: "#4aaf5e",
                lightGreenSh: "rgba(185, 255, 99, 0.3)",
            },
        },
    },
    plugins: [],
};
