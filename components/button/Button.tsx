/* eslint-disable prettier/prettier */
import { Button } from "@nextui-org/react";

interface ButtonProps {
    label: string;
    click?: () => void;
}

export const PrimaryButton = ({ label, click }: ButtonProps) => {
    return (
        <button
            className="
                    cursor-pointer transition-all hover:scale-85 flex items-center justify-center gap-2.5 text-sm px-8 rounded-3xl text-white  
                    border-2 border-[#0618db] h-[50px] py-7 font-semibold scale-[0.89] 
                    relative bg-gradient-to-b from-[#3470fa] to-[#313ed7]
                    hover:[&_.hide]:opacity-100 hover:[&_.hide]:visible hover:[&_.hide]:scale-100
                    hover:[&_.icon::before]:opacity-100 hover:[&_.icon::before]:visible hover:[&_.icon::before]:scale-100
                    hover:[&_.icon::after]:opacity-100 hover:[&_.icon::after]:visible hover:[&_.icon::after]:scale-100
                    active:bg-gradient-to-b active:from-[#313ed7] active:to-[#3470fa] active:border-[#313ed7]
                "
        >
            {label}
        </button>
    );
};
