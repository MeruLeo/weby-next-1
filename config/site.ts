export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "وبی نکست - طرح اول",
    description: "سیستم معرفی و رزرو نوبت یا جلسه",
    navItems: [
        {
            label: "خانه",
            href: "/",
        },
        {
            label: "ارتباط با ما",
            href: "/contact",
        },
        {
            label: "درباره ما",
            href: "/about",
        },
    ],
    // navMenuItems: [
    //     {
    //         label: "Profile",
    //         href: "/profile",
    //     },
    //     {
    //         label: "Dashboard",
    //         href: "/dashboard",
    //     },
    //     {
    //         label: "Projects",
    //         href: "/projects",
    //     },
    //     {
    //         label: "Team",
    //         href: "/team",
    //     },
    //     {
    //         label: "Calendar",
    //         href: "/calendar",
    //     },
    //     {
    //         label: "Settings",
    //         href: "/settings",
    //     },
    //     {
    //         label: "Help & Feedback",
    //         href: "/help-feedback",
    //     },
    //     {
    //         label: "Logout",
    //         href: "/logout",
    //     },
    // ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
    },
};
