import IconGitHub from "./IconGitHub";

export default function NavBar() {
    return (
        <>
            <div className="flex flex-row items-center justify-center gap-[218px] border-solid border-x-0 border-t-0 border-b-[1px] border-base-300 dark:border-base-700 dark:bg-base-800 w-full h-[64px]"> 
                <div className="flex flex-row items-center justify-center ">
                    <h1 className="jhoan-logo poppins-extrabold text-[24px]">Jhoan's&nbsp;</h1>
                    <h1 className="poppins-extrabold text-base-900 dark:text-base-100 text-[24px]">Tab-Saver</h1>
                </div>
                <IconGitHub className="dark:fill-base-100"/> 
            </div>
        </>
    )
}