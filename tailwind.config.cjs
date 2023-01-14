/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: "#9047FF",
                dense: "#000101",
            },
            fontFamily: {
                poppy: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
