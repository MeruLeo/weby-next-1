"use client";

/* eslint-disable prettier/prettier */
import { PrimaryButton } from "@/components/button/Button";
import { title } from "@/components/primitives";
import React, { useState } from "react";
import {
    ChatIcon,
    MapIcon,
    PhoneIcon,
    PresIcon,
} from "@/components/icons/Icons";
import { ReactNode } from "react";
import Image from "next/image";
import ModalApp from "@/components/modal/Modal";

interface ContactProps {
    icon: ReactNode;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref?: string;
    buttonClick?: () => void;
}

const Contact = ({
    title,
    icon,
    description,
    buttonLabel,
    buttonClick,
    buttonHref,
}: ContactProps) => {
    return (
        <li className="flex gradient-border sm:gradient-border__x load-card  flex-col  justify-between items-center w-[12rem] p-4 rounded-[2rem] mb-12">
            <div className="flex justify-center items-center backdrop-blur-sm p-4 rounded-full  text-primary  text-center">
                {icon}
            </div>
            <h2 className="text-xl font-daBold">{title}</h2>
            <p className="mt-4 text-sm">{description}</p>
            {buttonClick ? (
                <button
                    onClick={buttonClick}
                    className="bg-primary w-full rounded-full p-2 mt-4 hover:scale-95 transition"
                >
                    {buttonLabel}
                </button>
            ) : (
                <a
                    href={buttonHref}
                    className="bg-primary w-full rounded-full p-2 mt-4 hover:scale-95 transition"
                >
                    {buttonLabel}
                </a>
            )}
        </li>
    );
};

export default function ContactPage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const onOpen = () => setIsOpen(true);
    const onOpenChange = () => setIsOpen(!isOpen);

    const contactPaths = [
        {
            title: "تماس تلفنی",
            description: "۰۹۳۳-۳۳۵-۲۶۵۰",
            buttonLabel: "تماس",
            icon: <PhoneIcon />,
            buttonClick: "",
            buttonHref: "",
        },
        {
            title: "آدرس",
            description: "اصفهان ، نجف آباد ، گلدشت ، خیابان بهشتی",
            buttonLabel: "مشاهده در مپ",
            icon: <MapIcon />,
            buttonClick: "",
            buttonHref: "",
        },
        {
            title: "ارتباط با پشتیبانی",
            description: "webynext@gmail.com",
            buttonLabel: "ایمیل",
            icon: <ChatIcon />,
            buttonClick: "",
            buttonHref: "",
        },
        {
            title: "جلسه حضوری",
            description: "ساعات کاری ۸ صبح الی ۱۸",
            buttonLabel: "هماهنگی",
            icon: <PresIcon />,
            buttonClick: onOpen,
            buttonHref: "",
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center">
            <section className="relative load-text z-40 top-24 flex flex-col justify-center items-center text-center">
                <span className="text-small gradient-border mb-4 bg-zinc-800 p-2 px-12 rounded-full text-secendry">
                    ۲۴ ساعت هفته در دسترس
                </span>
                <div>
                    <h1 className={`${title()} font-daBold shadow-2xl`}>
                        ارتباط با &nbsp;
                        <span className={title({ color: "blue" })}>تیم</span>
                        <br />
                        &nbsp;دوست داشتنی ما
                    </h1>
                    <p className="mt-8 shadow-2xl">بیاید باهم حرف بزنیم</p>
                    <ul className="flex flex-col sm:flex-row justify-center  mt-8 sm:gap-4 absolute items-stretch left-1/2 -translate-x-1/2">
                        {contactPaths.map((contact) => (
                            <Contact key={contact.title} {...contact} />
                        ))}
                        <ModalApp
                            isOpen={isOpen}
                            onOpen={onOpen}
                            onOpenChange={onOpenChange}
                        />
                    </ul>
                </div>
            </section>
            <section className="absolute w-full bottom-0 flex flex-col justify-center items-center">
                <span className="w-[10rem] block sm:hidden load-blur h-screen blur-3xl sticky bg-primary rounded-full" />
                <span className="w-full hidden sm:block h-[5rem] load-blur__x -top-[19rem] blur-3xl absolute bg-primary rounded-full" />
            </section>
        </div>
    );
}
