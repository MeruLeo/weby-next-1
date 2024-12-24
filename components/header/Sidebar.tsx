/* eslint-disable prettier/prettier */
import Link from "next/link";
import { PrimaryButton } from "../button/Button";
import { Divider } from "@nextui-org/react";
import { ChatIcon, LeftIcon, MapIcon, PhoneIcon, XIcon } from "../icons/Icons";
import { ReactNode } from "react";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    links: { href: string; label: string }[];
}

interface QuickContactProps {
    icon: ReactNode;
    value: string;
    link: string;
}

const QuickContact = ({ icon, value, link }: QuickContactProps) => {
    return (
        <a
            href={`${link}`}
            className="bg-zinc-800 flex p-4 gap-4 rounded-2xl w-full"
        >
            {icon}
            <span>{value}</span>
        </a>
    );
};

export const Sidebar = ({ isOpen, onClose, links }: SidebarProps) => {
    return (
        <div
            className={`fixed top-0 w-full right-0 h-full bg-dark z-50 transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <header className="flex justify-between items-center w-full p-4">
                <div className="">
                    <span>®Weby Next</span>
                </div>
                <button
                    className=" bg-red-700 rounded-full p-1 top-4 right-4 text-white text-2xl"
                    onClick={onClose}
                >
                    <XIcon />
                </button>
            </header>
            <nav className="flex flex-col justify-between items-center  space-y-4 p-4">
                <ul className="w-full space-y-4">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-zinc-500 flex justify-between items-center bg-zinc-800 w-full p-4 rounded-2xl transition hover:text-white"
                            onClick={onClose}
                        >
                            <div>
                                <h3>{link.label}</h3>
                            </div>
                            <LeftIcon />
                        </Link>
                    ))}
                </ul>
                <Divider />
                <ul className="w-full space-y-4">
                    <QuickContact
                        icon={<PhoneIcon />}
                        value="۰۹۳۳-۳۳۵-۲۶۵۰ "
                        link="tel:0912-345-6789"
                    />
                    <QuickContact
                        icon={<MapIcon />}
                        value="اصفهان ، نجف آباد ، گلدشت"
                        link="#"
                    />
                    <QuickContact
                        icon={<ChatIcon />}
                        value="webynext@gmail.com"
                        link="mailto:webynext@gmail.com"
                    />
                </ul>
                <Divider />
                <p className="absolute text-zinc-500 bottom-5 right-5">
                    شنبه تا چهارشنبه از ۸ صبح تا ۶ عصر
                    <br />
                    پنجشنبه ها از ۱۰ صبح تا ۶ عصر
                </p>
            </nav>
        </div>
    );
};
