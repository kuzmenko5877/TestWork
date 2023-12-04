import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";
import { useMediaQuery } from "react-responsive";

export const Burger = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 1024 });

    if (!isMobile) {
        return null;
    }
    return (
        <>
            <svg
                onClick={() => setOpen(!open)}
                className="absolute right-0 hidden lg:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="64"
                height="64"
            >
                <rect width="35" height="4" rx="2" fill="#333"/>
                <rect y="12" width="35" height="4" rx="2" fill="#333"/>
                <rect y="24" width="35  " height="4" rx="2" fill="#333"/>
            </svg>

            {open && (
                <BurgerMenu
                    onClose={() => setOpen(false)}
                />
            )}
        </>
    );
};
