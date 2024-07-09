interface IconGripProps {
    backgroundColor?: string;
    surfaceColor?: string;
}

export default function IconGrip({backgroundColor,surfaceColor}:IconGripProps) {
    return (
        <>
            <svg width="36" height="48" viewBox="0 0 36 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="48" rx="6" fill={backgroundColor ?? "#E7E3E8"} className="dark:fill-base-600"/>
                <circle cx="12" cy="12" r="4" fill={surfaceColor ?? "#B4B1B5"} className="dark:fill-base-400"/>
                <circle cx="24" cy="12" r="4" fill={surfaceColor ?? "#B4B1B5"} className="dark:fill-base-400"/>
                <circle cx="12" cy="24" r="4" fill={surfaceColor ?? "#B4B1B5"} className="dark:fill-base-400"/>
                <circle cx="24" cy="24" r="4" fill={surfaceColor ?? "#B4B1B5"} className="dark:fill-base-400"/>
                <circle cx="12" cy="36" r="4" fill={surfaceColor ?? "#B4B1B5"} className="dark:fill-base-400"/>
                <circle cx="24" cy="36" r="4" fill={surfaceColor ?? "#B4B1B5"} className="dark:fill-base-400"/>
            </svg>
        </>
    )
}