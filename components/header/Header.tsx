/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";
import Link from "next/link";
import { PrimaryButton } from "../button/Button";
import { Sidebar } from "./Sidebar";
import { BarsIcon } from "../icons/Icons";
import ModalApp from "../modal/Modal";

interface HeaderLinkProps {
    href: string;
    label: string;
}

const HeaderLink = ({ href, label }: HeaderLinkProps) => {
    return (
        <Link href={href} className="text-zinc-500 transition hover:text-white">
            {label}
        </Link>
    );
};

export const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onOpen = () => setIsOpen(true);
    const onOpenChange = () => setIsOpen(!isOpen);

    const headerLinks = [
        { href: "/", label: "خانه" },
        { href: "/about", label: "درباره ما" },
        { href: "/contact", label: "تماس با ما" },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="bg-dark md:w-[70%] z-50 shadow-2xl gradient-border fixed p-4 md:p-10 left-1/2 -translate-x-1/2 top-5 lg:rounded-full md:rounded-2xl sm:rounded-2xl w-[90%] rounded-2xl h-16 flex items-center">
                {/* لوگو */}
                <div className="flex-1 text-start">
                    <span>®Weby Next</span>
                </div>

                {/* لینک‌ها - فقط در دسکتاپ نمایش داده می‌شود */}
                <nav className="hidden md:flex flex-1 justify-center gap-8 items-center text-center">
                    {headerLinks.map((link) => (
                        <HeaderLink
                            key={link.href}
                            href={link.href}
                            label={link.label}
                        />
                    ))}
                </nav>

                {/* دکمه - فقط در دسکتاپ نمایش داده می‌شود */}
                <div className="hidden md:flex flex-1 justify-end">
                    <PrimaryButton label="شروع همکاری" click={onOpen} />
                </div>

                {/* دکمه منو برای موبایل */}
                <button
                    className="md:hidden text-white"
                    onClick={toggleSidebar}
                >
                    <BarsIcon />
                </button>
            </header>

            {/* منوی کناری برای موبایل */}
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={toggleSidebar}
                links={headerLinks}
            />
            <ModalApp
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
            />
        </>
    );
};
