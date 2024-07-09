import IconDelete from "./IconDelete";
import IconGrip from "./IconGrip";

export default function Item() {
    return (
        <>
            <div className="flex flex-row items-center justify-center gap-[4px]">
                <IconGrip/>
                <div className="flex flex-row items-center justify-start gap-1 bg-base-200 dark:bg-base-600 rounded-md w-[364px] h-[48px]">
                    <img src="https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png" alt="Icon" className="w-[36px] h-[36px] pl-2" />
                    <h2 className="poppins-regular text-base-400 dark:text-base-50 text-[20px]">Whatsapp Web</h2>
                </div>
                <IconDelete />
            </div>
        </>
    )
}   