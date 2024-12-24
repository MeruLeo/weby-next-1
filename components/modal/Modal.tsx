"use client";

/* eslint-disable prettier/prettier */
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { SVGProps } from "react";

interface ModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    phoneValue?: string;
}

export default function ModalApp({
    isOpen,
    onOpen,
    onOpenChange,
    phoneValue,
}: ModalProps): JSX.Element {
    return (
        <>
            <Modal
                isOpen={isOpen}
                placement="auto"
                onOpenChange={onOpenChange}
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose: () => void) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                فرم جلسه
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col gap-2 py-2 px-1 justify-between">
                                    <Input label="نام و نام خانوادگی" />
                                    <Input
                                        label="شماره تماس"
                                        value={phoneValue}
                                    />
                                    <Select label="دپارتمان">
                                        <SelectItem>مالی</SelectItem>
                                        <SelectItem>فنی</SelectItem>
                                        <SelectItem>سفارش انبوه</SelectItem>
                                    </Select>
                                </div>
                                <p className="text-zinc-500 text-medium">
                                    همکاران ما در اسرع وقت با شما جهت هماهنگی
                                    جلسه تماس خواهد گرفت
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    خروج
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    ارسال
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
