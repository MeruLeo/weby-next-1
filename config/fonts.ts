import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const daLigth = {
    variable: "--da-ligth",
};

export const daMedium = {
    variable: "--da-medium",
};

export const daBold = {
    variable: "--da-bold",
};
