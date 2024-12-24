"use client";

import { PrimaryButton } from "@/components/button/Button";
import ModalApp from "@/components/modal/Modal";
/* eslint-disable prettier/prettier */
import { title } from "@/components/primitives";
import { Input, Modal } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [isLabel, setIsLabel] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpen = () => setIsOpen(true);
    const onOpenChange = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-col justify-center items-center">
            <section className="relative z-40 top-24 flex flex-col justify-center items-center text-center">
                <span className="text-small load-text gradient-border mb-4 bg-zinc-800 p-2 px-12 rounded-full text-secendry">
                    ساخته شده توسط امیرعلی الله‌وردی
                </span>
                <div>
                    <h1 className={`${title()} font-daBold load-text`}>
                        سایت از شما
                        <br />
                        افزایش&nbsp;
                        <span className={title({ color: "blue" })}>سرعت</span>
                        &nbsp; از ما
                    </h1>
                    <p className="mt-8 load-text__y">
                        تجزیه و تحلیل محصول و رشد قدرتمند و خودسرانه که به شما
                        کمک می کند کاربران بیشتری را تبدیل کنید،
                        <br />
                        درگیر کنید و کاربران بیشتری را حفظ کنید. مورد اعتماد بیش
                        از 4000 استارتاپ.
                    </p>
                    <div className="flex justify-center load-text absolute w-[20rem] mt-8 left-1/2 -translate-x-1/2 items-center">
                        <div>
                            <label
                                htmlFor="email-input"
                                style={{ pointerEvents: "none" }}
                                className={`${
                                    isLabel || inputValue
                                        ? " -top-3  backdrop-blur-md  px-2"
                                        : "top-[1.25rem] text-sm"
                                } absolute right-4  rounded-full transition-all ease duration-200 font-daBold text-primary border-primary`}
                            >
                                شماره خود را وارد کنید
                            </label>
                            <input
                                id="email-input"
                                onChange={(e) => setInputValue(e.target.value)}
                                value={inputValue}
                                onFocus={() => setIsLabel(true)}
                                onBlur={() => setIsLabel(false)}
                                className="border-primary bg-dark bg-opacity-65 border outline-none p-4 rounded-3xl"
                            />
                        </div>
                        <PrimaryButton label="ارسال" click={onOpen} />
                    </div>
                </div>
            </section>
            <section className="absolute bottom-0 flex flex-col justify-center items-center">
                <span className="w-[10rem] load-blur h-screen blur-3xl sticky bg-primary rounded-full" />
                <Image
                    src={`/imgs/13.png`}
                    alt="13"
                    width={800}
                    height={800}
                    className="z-30 load-text"
                />
            </section>
            <ModalApp
                isOpen={isOpen}
                onOpen={onOpen}
                phoneValue={`${inputValue}`}
                onOpenChange={onOpenChange}
            />
        </div>
    );
}
