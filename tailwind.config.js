import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)"],
                mono: ["var(--font-mono)"],
                daLight: ["var(--da-light)"],
                daMedium: ["var(--da-medium)"],
                daBold: ["var(--da-bold)"],
            },
            colors: {
                primary: "#044FC7",
                secendry: "#898A8C",
                dark: "#17191C",
            },
            backgroundImage: {
                darkPrimary: "linear-gradient(to right, #0B0C0D, #1C1E21)",
                lightPrimary:
                    "inear-gradient(to right, rgba(4, 79, 199, 0), rgba(89, 136, 210, 0.41) 53%, rgba(4, 79, 199, 0) 100%)",
            },
            borderWidth: {
                DEFAULT: "1px",
                2: "2px",
                3: "3px",
                4: "4px",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
