import { ReactNode } from "react";

interface BtnProps {
    icon: ReactNode;
    text: ReactNode;
}

export default function Btn({icon,text}:BtnProps) {
    return (
        <>
            <div className="flex flex-row items-center justify-center w-fit h-[36px] gap-2 p-[6px] bg-base-200 rounded-md dark:bg-base-600 cursor-pointer">
                {icon}
                <h2 className="poppins-regular text-base-400 dark:text-base-50 text-[20px]">{text}</h2>
            </div>
        </>
    )
}