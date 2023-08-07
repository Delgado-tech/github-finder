import { useEffect, useRef } from "react";
import { NavbarContainer } from "./style";
import { HiSearch } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navbarRef = useRef<HTMLInputElement | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const navbar = navbarRef.current;

        const handleInput = (ev: Event) => {
            const keyDown = ev as KeyboardEvent;
            const input = ev.target as HTMLInputElement;

            if (keyDown.key === "Enter" && input.value.length > 0) {
                navigate(`/${input.value}`, {});
                navigate(0);
            }
        }

        if (navbar) navbar.addEventListener("keydown", handleInput);

        return() => {
            if (navbar) navbar.removeEventListener("keydown", handleInput);
        }

    }, [navbarRef]);

    return (
        <NavbarContainer>
            <input ref={navbarRef} type="text" placeholder="Pesquisar Usuário" spellCheck={false} maxLength={100} />
            <HiSearch className="flip" />
        </NavbarContainer>
    );
}